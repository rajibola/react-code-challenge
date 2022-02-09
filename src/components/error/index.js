import { Component } from "react";
import { Container } from "./styles";

export default class Error extends Component {
  render() {
    return (
      <Container>
        <h1>{this.props.message}</h1>
        <p>Restart the server</p>
      </Container>
    );
  }
}
