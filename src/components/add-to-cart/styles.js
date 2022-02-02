import styled from "styled-components";

export const Container = styled.div`
  width: 292px;
  height: 200px;

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
`;
