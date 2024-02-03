const Card = (props) => {
  return (
    <div>
      {<p>{props.colaborador.nome}</p>}
      {<p>{props.colaborador.cargo}</p>}
      {<p>{props.colaborador.imagem}</p>}
      {<p>{props.colaborador.time}</p>}
    </div>
  )
}

export default Card;