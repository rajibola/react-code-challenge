import { Component } from "react";
import { Container } from "./styles";

export default class Loading extends Component {
  render() {
    return (
      <Container>
        <h1>Loading . . .</h1>
        <p>Please wait</p>
      </Container>
    );
  }
}
