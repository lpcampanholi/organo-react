import './Formulario.css'

function Formulario() {
  return (
    <div className="formulario">
      <h2 className='titulo'>Preencha os dados para criar o card do colaborador.</h2>
      <form>

        <div className="campo">
          <label className="rotulo" htmlFor="nome">Nome</label>
          <input className="entrada" type="text" name="nome" id="nome" placeholder="Digite seu nome" />
        </div>

        <div className="campo">
          <label className="rotulo" htmlFor="cargo">Cargo</label>
          <input className="entrada" type="text" name="cargo" id="cargo" placeholder="Digite seu cargo" />
        </div>

        <div className="campo">
          <label className="rotulo" htmlFor="imagem">Imagem</label>
          <input className="entrada" type="text" name="imagem" id="imagem" placeholder="Informe o endereço da imagem" />
        </div>

        <div className="campo">
          <label className="rotulo" htmlFor="time">Time</label>
          <select className="entrada" name="time" id="time">
            <option value=""></option>
            <option value="">Programação</option>
            <option value="">Front-End</option>
            <option value="">Data Science</option>
            <option value="">Devops</option>
            <option value="">UX e Design</option>
            <option value="">Mobile</option>
            <option value="">Inovação e Gestão</option>
          </select>
        </div>

      </form>
      <button className='botao' type="submit">Criar card</button>

    </div>
  )
}

export default Formulario;