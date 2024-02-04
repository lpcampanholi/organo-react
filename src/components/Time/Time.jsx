import './Time.css';
import Card from '../Card';

const Time = (props) => {
  return (
    <section className='time' style={{ backgroundColor: props.corDeFundo }}>
      <h3 style={{ borderColor: props.corDestaque }}>{props.titulo}</h3>
      <Card />
    </section>
  );
};

export default Time;