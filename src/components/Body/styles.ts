import styled from "styled-components";

export const Container = styled.div`
  max-width: 820px;
  height: 300px;
  margin-top: 25px;

  display: flex;

  img {
    width: 50%;
  }

  div {
    padding: 5%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`;
