import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = ({ lista, onAdicionarColaborador }) => {

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
    onAdicionarColaborador(colaborador);
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
          obrigatorio={true}
          valor={imagem}
          aoAtualizar={(e) => setImagem(e.target.value)}
        />

        <ListaSuspensa
          label="Time"
          itens={lista}
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
