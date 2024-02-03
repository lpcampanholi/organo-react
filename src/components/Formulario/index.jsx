import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props, { aoSubmeter }) => {

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
    aoSubmeter(colaborador);
  }

  return (
    <section onSubmit={aoClicar} className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          obrigatorio={true}
          aoAtualizar={(e) => setNome(e.target.value)}
        />

        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          obrigatorio={true}
          aoAtualizar={(e) => setCargo(e.target.value)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Insira o endereço da imagem"
          obrigatorio={true}
          aoAtualizar={(e) => setImagem(e.target.value)}
        />

        <ListaSuspensa
          label="Time"
          lista={props.grupo}
          aoAtualizar={(e) => setTime(e.target.value)}
        />

        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
