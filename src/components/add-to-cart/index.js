import { Component } from "react";
import AddToCart from "./addToCart";

class AddToCartContainer extends Component {
  render() {
    return <AddToCart item={this.props.item} />;
  }
}

export default AddToCartContainer;
