import styled from "styled-components";
import { Button } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: Roboto-Condensed;
    margin-bottom: 20px;
  }

  p {
    font-family: Roboto-Condensed;
    font-size: 130px;
  }
`;

export const StyledButton = styled(Button)`
  width: 120px;
`;
