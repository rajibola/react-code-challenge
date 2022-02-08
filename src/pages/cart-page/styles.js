import styled from "styled-components";
import { globalContainer } from "../../styles";

export const Container = styled(globalContainer)`
  background-color: white;

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
    /* gap: 41px; */
  }

  .list-container {
    border-top: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 41px; */
    padding: 20px 0;
    height: 225px;

    .left-container {
      /* width: 136px; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .name {
        font-size: 30px;
        font-weight: 400;
        margin-top: 16px;
        line-height: 27px;
        margin-bottom: 12px;
      }
      .brand {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 5px;
        line-height: 27px;
      }

      .price {
        font-weight: 700;
        margin-bottom: 12px;
        line-height: 46px;
        font-size: 24px;
      }

      .optionsContainer {
        display: flex;
        gap: 8px;
        align-self: flex-start;
      }
    }

    .right-container {
      display: flex;

      .image {
        width: 141px;
        object-fit: contain;
        object-position: center;
      }

      .add-remove {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;

        .add,
        .remove {
          cursor: pointer;
          width: 45px;
          height: 45px;
          stroke-width: 0.5;

          &:hover {
            opacity: 0.65;
          }
        }

        .quantity {
          font-family: Raleway;
          font-size: 24px;
          line-height: 38.4px;
        }
      }
    }
  }
`;
