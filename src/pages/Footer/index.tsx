/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import { AiOutlineTeam } from "react-icons/ai";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <h2>O que fazer agora?</h2>
        <p>
          Se você gostou do que leu até aqui, fico feliz! Mas saiba que tem
          muuuuuuito mais :)
        </p>
        <p>
          O próximo passo para se desenvolver essa habilidade é
          <strong>PRATICAR.</strong>
        </p>
        <p>
          E se você está se perguntando como fazer isso, tenho a resposta pra
          você! Com o curso
          <strong>GoTeamwork</strong>
          você terá tudo o que precisa para se desenvolver aplicando todas as
          técnicas em curso.
        </p>

        <h2>O que encontro no curso GoTeamwork?</h2>
        <p>Adquirindo o curso conosco você encontrará:</p>
        <ul>
          <li>
            <AiOutlineTeam />
            Mentorias
          </li>
          <li>
            <AiOutlineTeam />
            Lives com os colegas do curso
          </li>
          <li>
            <AiOutlineTeam />
            Video-aulas com todas técnicas a desenvolver ao longo do curso
          </li>
          <li>
            <AiOutlineTeam />
            Muita prática
          </li>
        </ul>
        <p>
          Tudo isso e mais um pouco será oferecido com o intuito de você
          praticar bastante e se sentir seguro com sua futura equipe de
          trabalho.
        </p>
        <button type="button">COMPRAR AGORA</button>
      </Container>
    </>
  );
};

export default Footer;
