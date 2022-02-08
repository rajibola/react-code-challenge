import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 80px;
  width: 325px;
  background-color: white;
  padding: 8px 16px;

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
    max-height: 315px;
    overflow: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    display: flex;
    flex-direction: column;
    gap: 41px;
  }

  .list-container {
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 41px; */
    z-index: 100;

    .left-container {
      width: 136px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .name,
      .brand {
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 5px;
        line-height: 26px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .price {
        font-weight: 600 !important;
        /* margin-bottom: 27px; */
        line-height: 25px;
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
        width: 105px;
        height: 137px;
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

          &:hover {
            opacity: 0.65;
          }
        }
      }
    }
  }
`;
