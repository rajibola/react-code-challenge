import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";
import {
  REMOVE_ITEM_FROM_CART,
  ADD_ITEM_TO_CART,
} from "../../graphql/mutations";
import { GET_CART_ITEMS } from "../../graphql/queries";
import CartDropdown from "./cart-dropdown";

class CartDropdownContainer extends Component {
  render() {
    const {
      data: { cartItems },
      removeItemFromCart,
      addItemToCart,
    } = this.props;
    return (
      <CartDropdown
        cartItems={cartItems}
        removeItem={(item) => removeItemFromCart({ variables: { item } })}
        addItem={(item) => addItemToCart({ variables: { item } })}
      />
    );
  }
}

export default flowRight(
  graphql(GET_CART_ITEMS),
  graphql(REMOVE_ITEM_FROM_CART, { name: "removeItemFromCart" }),
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" })
)(CartDropdownContainer);
