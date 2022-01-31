import styled from "styled-components";

export const globalContainer = styled.div`
  width: 100%;
  padding: 80px 100px 0px;
`;

export const Swatch = styled.div`
  width: 63px;
  height: 45px;
  background-color: ${({ isSwatch, value }) => isSwatch && value};
  border: ${({ isSwatch }) => !isSwatch && "1px solid #1d1f22;"};

  justify-content: center;
  align-items: center;
  display: flex;
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
