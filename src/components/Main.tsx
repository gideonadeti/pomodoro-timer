import { useEffect, useState } from "react";

import Lengths from "./Lengths";
import Timer from "./Timer";

export default function Main() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(sessionLength * 60);
  const [playing, setPlaying] = useState(false);

  function pauseOrPlay() {
    setPlaying(!playing);
  }

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [playing]);

  const lengths = [
    {
      name: "Break",
      value: breakLength,
      increase: () => breakLength < 60 && setBreakLength(breakLength + 1),
      decrease: () => breakLength > 1 && setBreakLength(breakLength - 1),
    },
    {
      name: "Session",
      value: sessionLength,
      increase: () => {
        if (sessionLength < 60) {
          setSecondsLeft(secondsLeft + 60);
          setSessionLength(sessionLength + 1);
        }
      },
      decrease: () => {
        if (sessionLength > 1) {
          setSecondsLeft(secondsLeft - 60);
          setSessionLength(sessionLength - 1);
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
            title="Session"
            time={formatTime()}
            reset={reset}
            pauseOrPlay={pauseOrPlay}
            playing={playing}
          />
        </div>
      </div>
    </main>
  );
}
