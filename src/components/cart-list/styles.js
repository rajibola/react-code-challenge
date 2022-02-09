import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid var(--text-ash);
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

    .image-container {
      display: flex;
      /* justify-content: space-between; */
      align-items: center;
      position: relative;
      .image {
        width: 141px;
        object-fit: cover;
        object-position: center;
        height: 185px;
      }

      .chevron-right,
      .chevron-left {
        position: absolute;
      }

      .chevron-right {
        right: 0;
        transform: rotate(180deg);
      }
    }

    .add-remove {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 12px;

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
`;
