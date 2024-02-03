import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";

const App = () => {

  const [colaboradores, setColaboradores] = useState([]);

  const adicionaColaborador = (colaborador) => {
    setColaboradores((prevColaboradores) => [...prevColaboradores, colaborador]);
  };

  const times = [
    'Programação',
    'Front-End',
    'Data Sciense',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  return (
    <div>
      <Banner />
      <Formulario
        lista={times}
        onAdicionarColaborador={adicionaColaborador}
      />
      <Time
        lista={colaboradores}
      />
    </div>
  );
}

export default App;
