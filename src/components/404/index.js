import { Component } from "react";
// import {  } from "../../styles";
import { Container, StyledButton } from "./styles";

export default class Error404 extends Component {
  render() {
    return (
      <Container>
        <p>404</p>
        <h1>This page does not exist</h1>
        <StyledButton to="/">GO HOME</StyledButton>
      </Container>
    );
  }
}
