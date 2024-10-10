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
      increase: () => setBreakLength(breakLength + 1),
      decrease: () => setBreakLength(breakLength - 1),
    },
    {
      name: "Session",
      value: sessionLength,
      increase: () => setSessionLength(sessionLength + 1),
      decrease: () => setSessionLength(sessionLength - 1),
    },
  ];

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
          <Timer title="Session" time="25:00" />
        </div>
      </div>
    </main>
  );
}