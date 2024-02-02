import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

  return (
    <div className="lista-suspensa">
      <label>{props.label}
        <select name={props.label} id={props.label}>
          <option id={0} value="">Selecione</option>
          {props.lista.map((elemento, i) => (
            <option value={elemento.toLowerCase()} id={i + 1}>{elemento}</option>
          ))}
        </select>
      </label>
    </div >
  )
}

export default ListaSuspensa;