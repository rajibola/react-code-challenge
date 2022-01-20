import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 101px;
  border-bottom: 1px solid;
  align-items: center;

  .right-section {
    justify-content: flex-end;
  }

  .left-section,
  .right-section {
    width: 500px;
    height: 100%;
    display: flex;
    align-items: center;

    .option {
      padding: 0 16px;
      height: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid transparent;
      text-transform: uppercase;
    }

    .active {
      border-bottom: 2px solid red;
      color: red;
    }
  }

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`;
