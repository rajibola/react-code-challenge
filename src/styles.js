import { Link } from "react-router-dom";
import styled from "styled-components";

export const globalContainer = styled.div`
  width: 100%;
  padding: 80px 100px 0px;
`;

export const Swatch = styled.div`
  width: 63px;
  height: 45px;
  background-color: ${({ isSwatch, value }) => isSwatch && value};
  border: ${({ isSwatch, isSelected }) =>
    isSwatch ? isSelected && "1px solid #1d1f22;" : "1px solid #1d1f22;"};

  justify-content: center;
  align-items: center;
  display: flex;
  font-family: SourceSansPro;
  ${({ isSelected, isSwatch }) =>
    !isSwatch && isSelected && "background-color: #1D1F22; color: white"};

  cursor: pointer;

  ${({ small }) =>
    small &&
    `   
    width: auto;
    min-width: 24px;
    height: 24px;
    font-size: 14px;
    padding: 0 5px;
    cursor: default;
    border-color: #1d1f22;
    color: #1d1f22;
    border-color: #1d1f22;
  `}

  &:hover {
    ${({ isSelected, isSwatch }) =>
      !isSwatch &&
      !isSelected &&
      `color: #a6a6a6;border-color: #a6a6a6;
    `}
    ${({ small }) => small && `color: #1d1f22;border-color: #1d1f22;`}
  }
`;

export const Button = styled(Link)`
  height: 52px;
  background-color: #5ece7b;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #fff;
  font-weight: 600;
  width: 100%;

  ${({ small }) =>
    small &&
    `
  height: 43px;
  font-size: 14px;
  `}

  ${({ secondary }) =>
    secondary &&
    `
  color: black;
  background-color: transparent;
  border: 1px solid black;
  `}

${({ disabled }) => disabled && `pointer-events: none; opacity: 0.7;`}
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(57, 55, 72, 0.22);
  position: fixed;
  top: 0;
  z-index: 10;

  ${({ isHidden }) => isHidden && "display: none;"}
`;
