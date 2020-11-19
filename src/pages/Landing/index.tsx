import React from "react";
import { FaArrowDown } from "react-icons/fa";

import { Container } from "./styles";

import tweet1 from "../../assets/tweets/tweet1.png";
import tweet2 from "../../assets/tweets/tweet2.png";
import tweet3 from "../../assets/tweets/tweet3.png";
import tweet4 from "../../assets/tweets/tweet4.png";

const Tweets: React.FC = () => {
  return (
    <Container>
      <h2>
        <FaArrowDown />
        <FaArrowDown />
        OUTRAS PESSOAS SE SENTEM ASSIM
        <FaArrowDown />
        <FaArrowDown />
      </h2>

      <div>
        <div className="divimg">
          <img src={tweet1} alt="Tweet 1" />
        </div>
        <div className="divimg">
          <img src={tweet2} alt="Tweet 2" />
        </div>
        <div className="divimg">
          <img src={tweet3} alt="Tweet 3" />
        </div>
        <div className="divimg">
          <img src={tweet4} alt="Tweet 4" />
        </div>
      </div>

      <h2>POR ONDE COMEÇAR?</h2>
      <p>
        Acreditamos que as pessoas precisam desenvolver a habilidade de
        trabalhar em equipe e por isso desenvolvemos algumas técnicas que podem
        te ajudar a começar:
      </p>
    </Container>
  );
};

export default Tweets;
