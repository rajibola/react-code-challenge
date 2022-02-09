import styled from "styled-components";
import { globalContainer } from "../../styles";

export const Container = styled(globalContainer)`
  background-color: var(--text-white);

  h1 {
    margin-bottom: 51px;
  }

  .total-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 52px;

    .total-text {
      font-family: Roboto-Condensed;
      font-weight: 500;
      font-size: 16px;
    }

    .total-price {
      font-family: Raleway;
      font-weight: 700;
      font-size: 16px;
    }
  }

  .header {
    margin-bottom: 23px;
    font-weight: 700;

    span {
      font-weight: 500;
    }
  }

  .totalItemsContainer {
    display: flex;
    flex-direction: column;
    padding-right: 143px;
  }
`;
