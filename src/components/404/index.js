import { Component } from "react";
import { Button } from "../../styles";
import { Container } from "./styles";

export default class Error404 extends Component {
  render() {
    return (
      <Container>
        <h1>This page does not exist</h1>
        <Button to="/">GO HOME</Button>
      </Container>
    );
  }
}
