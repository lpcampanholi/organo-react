import './Time.css';
import Card from '../Card';

const Time = ({ titulo, corDestaque, corDeFundo, colaboradores }) => {
  return (
    colaboradores.length > 0 && <section className='time' style={{ backgroundColor: corDeFundo }}>
      <h3 style={{ borderColor: corDestaque }}>{titulo}</h3>
      <div className='cards'>
        {colaboradores.map((colaborador) => {
          return (
            <Card
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              cor={corDestaque}
              key={colaborador.nome}
            />)
        })}
      </div>
    </section>
  );
};

export default Time;