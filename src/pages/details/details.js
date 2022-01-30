import { Component } from "react";

export class Details extends Component {
  render() {
    const { product } = this.props;
    console.log({ product });
    return <div>DETAILS PAGE</div>;
  }
}
