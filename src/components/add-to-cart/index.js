import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";
import { ADD_ITEM_TO_CART, CLEAR_CART_ITEMS } from "../../graphql/mutations";
import { GET_CURRENCY } from "../../graphql/queries";
import AddToCart from "./addToCart";

class AddToCartContainer extends Component {
  render() {
    return (
      <AddToCart
        item={this.props.item}
        addItem={(item) => this.props.addItemToCart({ variables: { item } })}
        clearCart={this.props.clearCartItems}
        currency={this.props.data.currency}
      />
    );
  }
}

export default flowRight(
  graphql(GET_CURRENCY),
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" }),
  graphql(CLEAR_CART_ITEMS, { name: "clearCartItems" })
)(AddToCartContainer);
