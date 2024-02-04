import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [imagem, setImagem] = useState();
  const [time, setTime] = useState();

  const aoClicar = (e) => {
    e.preventDefault();
    const colaborador = {
      nome,
      cargo,
      imagem,
      time
    };
    props.onAdicionarColaborador(colaborador);
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoClicar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          obrigatorio={true}
          valor={nome}
          aoAtualizar={(e) => setNome(e.target.value)}
        />

        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          obrigatorio={true}
          valor={cargo}
          aoAtualizar={(e) => setCargo(e.target.value)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Insira o endereço da imagem"
          valor={imagem}
          aoAtualizar={(e) => setImagem(e.target.value)}
        />

        <ListaSuspensa
          label="Time"
          itens={props.lista}
          obrigatorio={true}
          valor={time}
          aoAtualizar={(e) => setTime(e.target.value)}
        />

        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
