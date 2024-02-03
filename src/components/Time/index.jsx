const Time = (props) => {
  return (
    <div>
      {props.lista.map((colaborador) => {
        return (
          <div>
            <h2>{colaborador.nome}</h2>
            <p>{colaborador.cargo}</p>
            <img src={props.imagem} alt="Foto do colaborador" />
            <p>{colaborador.time}</p>
          </div>
        )
      })};
    </div>
  )
};

export default Time;