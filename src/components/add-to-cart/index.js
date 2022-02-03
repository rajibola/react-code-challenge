import { Component } from "react";
import { graphql } from "react-apollo";
import { ADD_ITEM_TO_CART, CLEAR_CART_ITEMS } from "../../graphql/mutations";
import AddToCart from "./addToCart";
import flowRight from "lodash.flowright";

class AddToCartContainer extends Component {
  render() {
    return (
      <AddToCart
        item={this.props.item}
        addItem={(item) => this.props.addItemToCart({ variables: { item } })}
        clearCart={this.props.clearCartItems}
      />
    );
  }
}

export default flowRight(
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" }),
  graphql(CLEAR_CART_ITEMS, { name: "clearCartItems" })
)(AddToCartContainer);
