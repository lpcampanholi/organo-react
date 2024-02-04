import './Card.css';

const Card = ({ nome, cargo, imagem, cor }) => {
  return (
    <div className='card'>
      <div className='cabecalho' style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className='rodape'>
        <h4>{nome}</h4>
        <p>{cargo}</p>
      </div>

    </div>
  )
};

export default Card;