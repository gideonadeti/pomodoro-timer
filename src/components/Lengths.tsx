interface LengthItem {
  name: string;
  value: number;
  increase: () => void;
  decrease: () => void;
}

export default function Lengths({ lengths }: { lengths: LengthItem[] }) {
  return (
    <>
      {lengths.map((length) => (
        <Length key={length.name} {...length} />
      ))}
    </>
  );
}

function Length({ name, value, increase, decrease }: LengthItem) {
  return (
    <div className="col">
      <div className="bg-light p-1 rounded shadow-sm d-flex flex-column align-items-center">
        <h4>{name} Length</h4>
        <div className="d-flex align-items-center">
          <button className="btn" onClick={increase} style={{ border: "none" }}>
            <i className="bi bi-arrow-up-short fs-2" />
          </button>
          <span className="fs-4">{value}</span>
          <button className="btn" onClick={decrease} style={{ border: "none" }}>
            <i className="bi bi-arrow-down-short fs-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
