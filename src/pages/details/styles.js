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
      line-height: 27px;
    }
    .name {
      font-size: 30px;
      line-height: 27px;
      margin-bottom: 40px;
    }

    .attribute-name {
      margin-bottom: 10px;
      font-family: Roboto-Condensed;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 18px;
    }

    .price-tag {
      margin-top: 40px;
      font-family: Roboto-Condensed;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 18px;
    }

    .price {
      font-family: Raleway;
      font-size: 24px;
      font-weight: 700;
      margin: 10px 0 42px 0;
    }

    .description {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      line-height: 159.96%;
      margin-top: 40px;
    }

    .attribute {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 20px;
    }
  }
`;
