import './CampoTexto.css';

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}
        <input type="text" name={props.label} id={props.label} placeholder={props.placeholder} />
      </label>
    </div>
  )
}

export default CampoTexto;