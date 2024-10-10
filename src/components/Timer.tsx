export default function Timer({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  return (
    <>
      <h1>{title}</h1>
      <p className="fw-bold display-1" style={{ fontSize: "5rem" }}>
        {time}
      </p>
      <Controls
        playing={false}
        handlePausePlay={() => {}}
        handleReset={() => {}}
      />
    </>
  );
}

function Controls({
  playing,
  handlePausePlay,
  handleReset,
}: {
  playing: boolean;
  handlePausePlay: () => void;
  handleReset: () => void;
}) {
  return (
    <div>
      <button className="btn fs-2" onClick={handlePausePlay}>
        <i className={`bi bi-${playing ? "pause" : "play"}-fill`}></i>
      </button>
      <button className="btn fs-2" onClick={handleReset}>
        <i className="bi bi-arrow-repeat"></i>
      </button>
    </div>
  );
}
