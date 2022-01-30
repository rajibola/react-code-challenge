import styled from "styled-components";

const globalContainer = styled.div`
  width: 100%;
  padding: 80px 100px 0px;
`;
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
