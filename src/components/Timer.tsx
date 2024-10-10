export default function Timer({
  title,
  time,
  reset,
  pauseOrPlay,
  playing,
}: {
  title: string;
  time: string;
  reset: () => void;
  pauseOrPlay: () => void;
  playing: boolean;
}) {
  return (
    <>
      <h1>{title}</h1>
      <p className="fw-bold display-1" style={{ fontSize: "5rem" }}>
        {time}
      </p>
      <div>
        <button className="btn fs-2" onClick={pauseOrPlay}>
          <i className={`bi bi-${playing ? "pause" : "play"}-fill`}></i>
        </button>
        <button className="btn fs-2" onClick={reset}>
          <i className="bi bi-arrow-repeat"></i>
        </button>
      </div>
    </>
  );
}
