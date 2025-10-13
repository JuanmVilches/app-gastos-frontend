import "./Filters.css";

export default function Filters({ value, setValue, setCategory }) {
  return (
    <>
      <div className="filters-container">
        <div className="input-container">
          <label htmlFor="">Precio:</label>
          <input
            type="range"
            min={0}
            max={3000}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <span>Menor o igual que: {value}</span>
        </div>

        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value=""></option>
          <option value="Supermercado">Supermercado</option>
          <option value="Ropa">Ropa</option>
          <option value="Regalos">Regalos</option>
          <option value="Tarjeta">Tarjeta</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
    </>
  );
}
