import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='cabecalho'>
        <img src="https://github.com/lpcampanholi.png" alt="" />
      </div>

      <div className='rodape'>
        <h4>Luís Plinio</h4>
        <p>Desenvolvedor Front-end</p>
      </div>

    </div>
  )
};

export default Card;