import styled from "styled-components";
import { globalContainer } from "../../styles";

export const Container = styled(globalContainer)`
  display: flex;

  .type-section {
    width: 80px;
    margin-right: 40px;

    .image {
      width: 80px;
      height: 80px;
      margin-bottom: 40px;
      object-fit: cover;
      object-position: center;
    }
  }

  .product-view {
    width: 610px;
    height: 511px;
    border: 1px solid;
    margin-right: 100px;
    object-fit: cover;
    object-position: center;
  }

  .swatch-section {
    width: 292px;
    height: 200px;
    /* border: 1px solid; */

    .brand {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .name {
      font-size: 30px;
      margin-bottom: 40px;
    }

    .attribute-name {
      margin-bottom: 10px;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 700;
    }

    .attribute {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 20px;
    }
  }
`;

export const Swatch = styled.div`
  width: 63px;
  height: 45px;
  background-color: ${({ isSwatch, value }) => isSwatch && value};
  border: 1px solid #1d1f22;

  justify-content: center;
  align-items: center;
  display: flex;
`;
