import React from "react";

import { Container } from "./styles";

import logoImg from "../../assets/goteamwork_transp2.png";

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Github Explorer" />
      <h1>Lorem Ipsum Lorem Ipsum Lorem</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button type="button">Começar</button>
    </Container>
  );
};

export default Header;
