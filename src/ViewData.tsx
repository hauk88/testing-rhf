import { Data } from "./data";

type ViewDataProps = {
  data: Data[];
  editData: (index: number) => void;
};

export default function ViewData(props: ViewDataProps) {
  return (
    <div>
      {props.data.map((d, i) => (
        <div key={i} style={{ display: "flex", gap: "2rem" }}>
          <p>{JSON.stringify(d)}</p>
          <button onClick={() => props.editData(i)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
