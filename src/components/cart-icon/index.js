import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";
// GraphQL Operations
import { TOGGLE_CART_HIDDEN } from "../../graphql/mutations";
import { GET_ITEM_COUNT } from "../../graphql/queries";
import CartIcon from "./cart-icon";

class CartIconContainer extends Component {
  render() {
    const {
      toggleCartHidden,
      data: { itemCount },
    } = this.props;

    return (
      <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
    );
  }
}

export default flowRight(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
