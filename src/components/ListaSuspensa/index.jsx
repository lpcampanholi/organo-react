import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

  return (
    <div className="lista-suspensa">
      <label>{props.label}
        <select name={props.label} id={props.label} value={props.valor} onChange={props.aoAtualizar} required={props.obrigatorio}>
          <option key={0} value="">Selecione</option>
          {props.itens.map((item, i) => (
            <option value={item} key={i + 1}>{item}</option>
          ))}
        </select>
      </label>
    </div >
  )
}

export default ListaSuspensa;