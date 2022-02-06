import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 101px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;

  align-items: center;

  .right-section {
    justify-content: flex-end;

    div > .arrow {
      margin-left: 10px;
    }
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

      &:hover {
        color: ${COLORS.green};
      }
    }

    .active {
      border-bottom: 2px solid ${COLORS.green};
      color: ${COLORS.green};
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
