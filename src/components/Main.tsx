import { useState } from "react";

import Lengths from "./Lengths";
import Timer from "./Timer";

export default function Main() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

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
      increase: () => sessionLength < 60 && setSessionLength(sessionLength + 1),
      decrease: () => sessionLength > 1 && setSessionLength(sessionLength - 1),
    },
  ];

  function formatTime(timeLeft: number) {
    const minutesPart = Math.floor(timeLeft / 60);
    const secondsPart = timeLeft - minutesPart * 60;

    const formattedSeconds = secondsPart < 10 ? "0" + secondsPart : secondsPart;
    const formattedMinutes = minutesPart < 10 ? "0" + minutesPart : minutesPart;

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  function reset() {
    setBreakLength(5);
    setSessionLength(25);
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
            time={formatTime(sessionLength * 60)}
            reset={reset}
          />
        </div>
      </div>
    </main>
  );
}
