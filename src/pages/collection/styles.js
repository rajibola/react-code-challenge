import styled from "styled-components";
import { globalContainer } from "../../styles";

export const Container = styled(globalContainer)`
  h2 {
    font-size: 42px;
    font-weight: normal;
    line-height: 67.2px;
    margin-bottom: 103px;
  }

  .title {
    text-transform: uppercase;
  }

  .products-container {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 103px 40px;
  }
`;
