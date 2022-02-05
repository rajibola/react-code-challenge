import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 80px;
  border: 1px solid;
  width: 325px;
  background-color: white;
  padding: 8px 16px;

  .header {
    margin-bottom: 23px;
    font-weight: 700;

    span {
      font-weight: 500;
    }
  }

  .list-container {
    border: solid 1px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 41px;
    z-index: 100;

    .left-container {
      width: 136px;

      .name,
      .brand {
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 5px;
      }

      .price {
        font-weight: 500;
        margin-bottom: 27px;
      }
    }

    .right-container {
      display: flex;

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
