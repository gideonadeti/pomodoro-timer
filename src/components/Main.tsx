import { useEffect, useState, useRef } from "react";

import Lengths from "./Lengths";
import Timer from "./Timer";

export default function Main() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(sessionLength * 60);
  const [playing, setPlaying] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Session");
  const audioRef = useRef<HTMLAudioElement>(null);

  function pauseOrPlay() {
    setPlaying(!playing);
  }

  useEffect(() => {
    function switchTimer() {
      if (currentTitle === "Session") {
        setCurrentTitle("Break");
        setSecondsLeft(breakLength * 60);
      } else {
        setCurrentTitle("Session");
        setSecondsLeft(sessionLength * 60);
      }
    }

    const playAudio = () => {
      audioRef.current?.play();
    };

    if (playing && secondsLeft > 0) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (secondsLeft === 0) {
      playAudio();
      switchTimer();
    }
  }, [playing, secondsLeft, breakLength, currentTitle, sessionLength]);

  const lengths = [
    {
      name: "Break",
      value: breakLength,
      increase: () => {
        if (breakLength < 60) {
          setBreakLength(breakLength + 1);

          if (currentTitle === "Break") {
            setSecondsLeft(secondsLeft + 60);
          }
        }
      },
      decrease: () => {
        if (breakLength > 1) {
          setBreakLength(breakLength - 1);

          if (currentTitle === "Break") {
            setSecondsLeft(secondsLeft - 60);
          }
        }
      },
    },
    {
      name: "Session",
      value: sessionLength,
      increase: () => {
        if (sessionLength < 60) {
          setSessionLength(sessionLength + 1);
          setSecondsLeft(secondsLeft + 60);
        }
      },
      decrease: () => {
        if (sessionLength > 1) {
          setSessionLength(sessionLength - 1);
          setSecondsLeft(secondsLeft - 60);
        }
      },
    },
  ];

  function formatTime() {
    const minutesPart = Math.floor(secondsLeft / 60);
    const secondsPart = secondsLeft - minutesPart * 60;

    const formattedSeconds = secondsPart < 10 ? "0" + secondsPart : secondsPart;
    const formattedMinutes = minutesPart < 10 ? "0" + minutesPart : minutesPart;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function reset() {
    setBreakLength(5);
    setSessionLength(25);
    setSecondsLeft(1500);
    setPlaying(false);
    setCurrentTitle("Session");

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  return (
    <main className="flex-grow-1 container-fluid mt-5">
      <div
        className="container border rounded shadow-sm p-3"
        style={{ maxWidth: "420px", minHeight: "360px" }}
      >
        <div className="row mb-3">
          <Lengths lengths={lengths} />
        </div>
        <div className="d-flex flex-column align-items-center">
          <Timer
            title={currentTitle}
            time={formatTime()}
            reset={reset}
            pauseOrPlay={pauseOrPlay}
            playing={playing}
          />
        </div>
      </div>
      <audio
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        preload="auto"
        ref={audioRef}
      />
    </main>
  );
}
