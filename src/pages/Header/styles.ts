import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  max-width: 670px;

  img {
    width: 40%;
  }

  h1 {
    font-size: 48px;
    line-height: 56px;

    margin-top: 40px;
    font-size: 700;
    font-weight: bold;
  }

  p {
    margin-top: 30px;
    margin-bottom: 15px;
    strong {
      font-weight: bold;
      background-color: #ed6663;
    }
  }

  /* button {
    width: 150px;
    height: 40px;

    color: #fff;
    background-color: #ed6663;
    font-weight: bold;

    margin-top: 20px;

    border-radius: 10px;
    border: 0;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#ed6663")};
    }
  } */
`;
