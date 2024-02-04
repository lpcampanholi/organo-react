import './CampoTexto.css';

const CampoTexto = ({ label, placeholder, valor, obrigatorio, aoAtualizar }) => {
  return (
    <div className="campo-texto">
      <label>{label}
        <input type="text"
          name={label}
          id={label}
          value={valor}
          placeholder={placeholder}
          required={obrigatorio}
          onChange={aoAtualizar} />
      </label>
    </div>
  )
}

export default CampoTexto;