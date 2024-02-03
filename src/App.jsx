import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

const App = () => {

  const grupo = [
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
      <Formulario grupo={grupo} />
    </div>
  );
}

export default App;
