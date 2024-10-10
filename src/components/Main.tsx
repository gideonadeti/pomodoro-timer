import { useState } from "react";

import Lengths from "./Lengths";

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
        className="container border rounded shadow-sm"
        style={{ maxWidth: "420px", minHeight: "360px" }}
      >
        <div className="row my-3 px-2">
          <Lengths lengths={lengths} />
        </div>
      </div>
    </main>
  );
}
