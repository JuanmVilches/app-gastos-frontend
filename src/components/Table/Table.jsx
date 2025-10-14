import { useEffect } from "react";
import "./Table.css";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
import formatDate from "../../../utils/formatDate";

export default function Table({ setGasto, gastosFiltrados }) {
  useEffect(() => {
    getGastos();
  }, []);

  async function getGastos() {
    try {
      const response = await axios.get(`${API}/gastos`);
      setGasto(response.data.gastos);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteItem(id) {
    try {
      const confirmacion = confirm("Confime");
      if (confirmacion) {
        await axios.delete(`${API}/gastos/${id}`);
        getGastos();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function editItem(item) {
    console.log(item);
  }

  return (
    <>
      <div className="table-wrapper">
        <table border={1} className="main-table">
          <thead>
            <tr>
              <th>Compra</th>
              <th>
                <div className="filter-price-container">
                  Precio
                  <div className="filter-price">
                    <div>🔼</div>
                    <div>🔽</div>
                  </div>
                </div>
              </th>
              <th>Categoría</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {gastosFiltrados.map((item, index) => {
              return (
                <tr id={index} key={item._id}>
                  <td>{item.gasto}</td>
                  <td>${item.precio}</td>
                  <td>{item.categoria}</td>
                  <td>{formatDate(item.fecha)}</td>
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => editItem(index)}>✏️</button>
                      <button onClick={() => deleteItem(item._id)}>🗑️</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}>
                Total: $
                {gastosFiltrados.reduce(
                  (total, item) => total + Number(item.precio),
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
