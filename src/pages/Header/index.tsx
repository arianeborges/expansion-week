import React from "react";

import { Container } from "./styles";

import logoImg from "../../assets/goteamwork_transp2.png";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Go Teamwork" />
      <h1>Aprenda a desenvolver a sua habilidade de trabalhar em equipe.</h1>
      <p>
        Já participou de um trabalho em grupo e acabou fazendo tudo sozinho?
        Acabou a faculdade, quer arrumar seu primeiro emprego mas não sabe como
        trabalhar em equipe?
        <strong> Você não está sozinho!</strong>
      </p>

      {/* <button type="button">Saiba mais</button> */}
    </Container>
  );
};

export default Header;
