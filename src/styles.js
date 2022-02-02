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

  &:hover {
    ${({ isSelected, isSwatch }) =>
      !isSwatch &&
      !isSelected &&
      `color: #a6a6a6;border-color: #a6a6a6;
    `}
  }
`;

export const Button = styled.div`
  height: 52px;
  background-color: #5ece7b;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #fff;
  font-weight: 600;
`;
