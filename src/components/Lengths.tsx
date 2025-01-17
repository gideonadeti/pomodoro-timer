interface LengthItem {
  name: string;
  value: number;
  increase: () => void;
  decrease: () => void;
}

export default function Lengths({
  lengths,
  playing,
}: {
  lengths: LengthItem[];
  playing: boolean;
}) {
  return (
    <>
      {lengths.map((length) => (
        <Length key={length.name} {...length} playing={playing} />
      ))}
    </>
  );
}

function Length({
  name,
  value,
  increase,
  decrease,
  playing,
}: LengthItem & { playing: boolean }) {
  return (
    <div className="col">
      <div className="bg-light p-1 rounded shadow-sm d-flex flex-column align-items-center">
        <h4>{name} Length</h4>
        <div className="d-flex align-items-center">
          <button
            className="btn"
            onClick={increase}
            style={{ border: "none" }}
            disabled={playing}
          >
            <i className="bi bi-arrow-up-short fs-2" />
          </button>
          <span className="fs-4">{value}</span>
          <button
            className="btn"
            onClick={decrease}
            style={{ border: "none" }}
            disabled={playing}
          >
            <i className="bi bi-arrow-down-short fs-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
