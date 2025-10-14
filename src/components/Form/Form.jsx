import "./Form.css";
import { useForm } from "react-hook-form";

export default function Form({ gasto, setGasto }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    setGasto([...gasto, data]);
    reset();
  });

  return (
    <>
      <form className="main-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="compra">Compra</label>
          <input
            type="text"
            id="compra"
            {...register("compra", {
              required: {
                value: true,
                message: "Debe indicar un nombre",
              },
              minLength: {
                value: 2,
                message: "Mínimo 2 caracteres",
              },
            })}
          />
          {errors.compra && <span>{errors.compra.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="precio">Precio</label>
          <input
            id="precio"
            type="number"
            {...register("precio", {
              required: {
                value: true,
                message: "El precio es requerido",
              },
              min: {
                value: 1,
                message: "Mínimo 1$.",
              },
            })}
          />

          {errors?.precio && <span>{errors.precio.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            {...register("categoria", {
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            })}
          >
            <option value=""></option>
            <option value="Supermercado">Supermercado</option>
            <option value="Ropa">Ropa</option>
            <option value="Regalos">Regalos</option>
            <option value="Salidas">Salidas</option>
            <option value="Tarjeta">Tarjeta</option>
            <option value="Otros">Otros</option>
          </select>
          {errors.categoria && <span>{errors.categoria.message}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="fecha">Fecha</label>
          <input
            id="fecha"
            type="date"
            {...register("fecha", {
              required: {
                value: true,
                message: "Fecha es obligatoria",
              },
            })}
          />
          {errors.fecha && <span>{errors.fecha.message}</span>}
        </div>
        <button className="form-button">Enviar</button>
      </form>
    </>
  );
}
