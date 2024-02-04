import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, obrigatorio, itens, valor, aoAtualizar }) => {

  return (
    <div className="lista-suspensa">
      <label>{label}
        <select
          name={label}
          id={label}
          value={valor}
          onChange={aoAtualizar}
          required={obrigatorio}
        >
          <option key={0} value="">Selecione</option>
          {itens.map((item, i) => (
            <option value={item} key={i + 1}>{item}</option>
          ))}

        </select>
      </label>
    </div>
  )
}

export default ListaSuspensa;