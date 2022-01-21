import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";

// GraphQL Operations
import { TOGGLE_CART_HIDDEN } from "../../graphql/mutations";
import CartIcon from "./cart-icon";

class CartIconContainer extends Component {
  render() {
    const { toggleCartHidden } = this.props;
    return <CartIcon toggleCartHidden={toggleCartHidden} />;
  }
}

export default flowRight(
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
