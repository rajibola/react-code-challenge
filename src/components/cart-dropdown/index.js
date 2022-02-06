import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";
import {
  REMOVE_ITEM_FROM_CART,
  ADD_ITEM_TO_CART,
  TOGGLE_CART_HIDDEN,
} from "../../graphql/mutations";
import { GET_ITEMS_CURRENCY } from "../../graphql/queries";
import CartDropdown from "./cart-dropdown";

class CartDropdownContainer extends Component {
  render() {
    const {
      data: { cartItems, currency },
      removeItemFromCart,
      addItemToCart,
      toggleCartHidden,
    } = this.props;

    return (
      <CartDropdown
        cartItems={cartItems}
        toggleCart={toggleCartHidden}
        removeItem={(item) => removeItemFromCart({ variables: { item } })}
        addItem={(item) => addItemToCart({ variables: { item } })}
        currency={currency}
      />
    );
  }
}

export default flowRight(
  graphql(GET_ITEMS_CURRENCY),
  graphql(REMOVE_ITEM_FROM_CART, { name: "removeItemFromCart" }),
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" }),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartDropdownContainer);
