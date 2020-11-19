import styled from "styled-components";

export const Container = styled.div`
  max-width: 650px;
  height: 300px;
  margin-top: 25px;

  /* background-color: #a52a2a; */

  display: flex;

  img {
    width: 50%;
  }

  div {
    padding: 5%;
    /* background-color: pink; */

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;
