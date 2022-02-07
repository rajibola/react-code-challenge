import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";

// GraphQL Operations
import { TOGGLE_CART_HIDDEN } from "../../graphql/mutations";
import { GET_CART_ITEMS } from "../../graphql/queries";
import CartIcon from "./cart-icon";

class CartIconContainer extends Component {
  render() {
    const {
      toggleCartHidden,
      data: { cartItems },
    } = this.props;
    return (
      <CartIcon
        toggleCartHidden={toggleCartHidden}
        itemCount={cartItems?.length}
      />
    );
  }
}

export default flowRight(
  graphql(GET_CART_ITEMS),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
