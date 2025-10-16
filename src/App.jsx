import { useState } from "react";
import Form from "./components/Form/Form.jsx";
import Table from "./components/Table/Table.jsx";
import "./App.css";
import Filters from "./components/Filters/Filters.jsx";
// import arrayGastos from "./array.js";
export default function App() {
  const [gasto, setGasto] = useState([]);

  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  const gastosFiltrados = gasto.filter(
    (item) =>
      (category ? item.categoria === category : true) &&
      (value ? item.precio <= value : true)
  );

  return (
    <>
      <main className="main-container">
        <Form gasto={gasto} setGasto={setGasto} value={value} />
        <div className="container">
          <Filters
            gasto={gasto}
            value={value}
            setValue={setValue}
            setCategory={setCategory}
          />
          <Table
            setGasto={setGasto}
            category={category}
            gastosFiltrados={gastosFiltrados}
          />
        </div>
      </main>
    </>
  );
}
