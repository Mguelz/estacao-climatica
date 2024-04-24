import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      // centralizando nos dois eixos, borda e padding
      <div classNmae="d-flex justify-content-center align-items-center border p-3">
        {/* text-whatever troca a cor */}
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
        >
          {/* deve ser utilizado somente por dispositivos de acessibilidade, como leitores de tela */}
          <span className="visually-hidden">Carregando...</span>
        </div>

        <p className="etxt-primary p-3">{this.props.mensagem || "Carregando..."}</p>
      </div>
    );
  }
}

//fora da classe que define o componente - 2.9.5 apostila 6
Loading.defaultProps = {
  mensagem: "Carregando",
};
