import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

  return (
    <div className="lista-suspensa">
      <label>{props.label}
        <select name={props.label} id={props.label} onChange={props.aoAtualizar}>
          <option key={0} value="">Selecione</option>
          {props.lista.map((item, i) => (
            <option value={item} key={i + 1}>{item}</option>
          ))}
        </select>
      </label>
    </div >
  )
}

export default ListaSuspensa;