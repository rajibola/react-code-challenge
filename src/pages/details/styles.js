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
`;
