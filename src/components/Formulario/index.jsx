import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {

  const time = ['Programação', 'Front-End', 'Data Sciense', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Insira o endereço da imagem" />
        <ListaSuspensa label="Time" lista={time} />
        <button type="submit">Criar card</button>
      </form>
    </section>
  );
};

export default Formulario;