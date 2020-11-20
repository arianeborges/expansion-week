import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  h2 {
    background-color: #43658b;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    margin-top: 40px;
    padding: 10px;
    font-weight: bold;

    svg {
      position: relative;
      top: 5px;
      margin-right: 5px;
      margin-left: 5px;
    }
  }

  p {
    font-size: 18px;
    margin-top: 20px;

    strong {
      font-weight: bold;
      background-color: #ed6663;
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  button {
    width: 100%;
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
  }

  ul {
    color: #ffa372;
    font-weight: bold;
    margin-top: 20px;
    list-style-type: none;
  }
`;
