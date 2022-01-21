import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  position: relative;
  .count {
    background-color: ${COLORS.black};
    color: white;
    font-size: 14px;
    line-height: 16.41px;
    font-weight: 700;
    height: 20px;
    min-width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 2.86px;
    top: -8px;
    right: -13px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    border-radius: 100px;
  }
`;
