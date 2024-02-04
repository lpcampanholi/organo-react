import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

const App = () => {

  const [colaboradores, setColaboradores] = useState([]);

  const adicionaColaborador = (colaborador) => {
    setColaboradores((prevColaboradores) => [...prevColaboradores, colaborador]);
  };

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  return (
    <div>
      <Banner />
      <Formulario
        lista={times.map(item => item.nome)}
        onAdicionarColaborador={adicionaColaborador}
      />
      {times.map((time, i) => {
        return (
          <Time
            key={i}
            titulo={time.nome}
            corDestaque={time.corPrimaria}
            corDeFundo={time.corSecundaria}
            colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
          />
        )
      })}
      <Rodape />
    </div>
  );
}

export default App;
