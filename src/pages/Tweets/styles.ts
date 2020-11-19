import styled from "styled-components";

export const Container = styled.div`
  h2 {
    background-color: black;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    margin-top: 40px;
    padding: 10px;

    svg {
      position: relative;
      top: 5px;
      margin-right: 5px;
      margin-left: 5px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 15px;

    .divimg {
      display: inline-block;
      img {
        width: 220px;
        height: 205px;
        position: relative;
        text-align: center;
      }
    }
  }
`;
