import "./Table.css";
export default function Table({ setGasto, gastosFiltrados }) {
  function formatDate(fecha) {
    const fechita = fecha.split("-");
    return `${fechita[2]}-${fechita[1]}-${fechita[0]}`;
  }

  function deleteItem(item) {
    const sure = confirm("are you sure?");
    if (sure) {
      setGasto((prev) => prev.filter((_, i) => i !== item));
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
                <tr id={index}>
                  <td>{item.compra}</td>
                  <td>${item.precio}</td>
                  <td>{item.categoria}</td>
                  <td>{formatDate(item.fecha)}</td>
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => editItem(index)}>✏️</button>
                      <button onClick={() => deleteItem(index)}>🗑️</button>
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
