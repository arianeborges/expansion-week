import React from "react";

import { Container } from "./styles";

import foto from "../../assets/capa.png";

const Body: React.FC = () => {
  return (
    <>
      <Container>
        <img src={foto} alt="Github Explorer" />
        <div>
          <h2>Lorem</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </Container>

      <Container>
        <img src={foto} alt="Github Explorer" />
        <div>
          <h2>Lorem</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </Container>

      <Container>
        <img src={foto} alt="Github Explorer" />
        <div>
          <h2>Lorem</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Body;
