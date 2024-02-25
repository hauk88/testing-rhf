import React from "react";
import "./App.css";
import FormTest from "./FormTest";
import { Data } from "./data";
import ViewData from "./ViewData";

function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [data, setData] = React.useState<Data[]>([]);
  const [formData, setFormData] = React.useState<Data | null>(null);

  const editData = (index: number) => {
    setFormData({ ...data[index] });
    setShowForm(true);
  };

  const newData = () => {
    setFormData(null);
    setShowForm(true);
  };

  const onSave = (formData: Data) => {
    setData([...data, formData]);
    showForm && setShowForm(false);
  };

  return (
    <>
      <h1>Testing form</h1>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}
      >
        <div>
          <h2>FORM</h2>
          {showForm && <FormTest onSave={onSave} data={formData} />}
        </div>

        <div>
          <h2>INFO</h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Toggle form
          </button>

          <button onClick={newData}>New Data</button>

          <ViewData data={data} editData={editData} />
        </div>
      </div>
    </>
  );
}

export default App;
