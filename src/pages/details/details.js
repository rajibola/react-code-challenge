import { Component } from "react";
import { Container } from "./styles";

export class Details extends Component {
  render() {
    const { product } = this.props;
    console.log({ product });
    return <Container>DETAILS PAGE</Container>;
  }
}
