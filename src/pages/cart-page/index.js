import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../../graphql/mutations";
import { GET_CART_ITEMS, GET_ITEMS_CURRENCY } from "../../graphql/queries";
import CartPage from "./cart-page";

class CartPageContainer extends Component {
  render() {
    const {
      data: { cartItems, currency },
      removeItemFromCart,
      addItemToCart,
    } = this.props;
    return (
      <CartPage
        cartItems={cartItems}
        removeItem={(item) => removeItemFromCart({ variables: { item } })}
        addItem={(item) => addItemToCart({ variables: { item } })}
        currency={currency}
      />
    );
  }
}

export default flowRight(
  graphql(GET_ITEMS_CURRENCY),
  graphql(GET_CART_ITEMS, { name: "cartItemsData" }),
  graphql(REMOVE_ITEM_FROM_CART, { name: "removeItemFromCart" }),
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" })
)(CartPageContainer);
