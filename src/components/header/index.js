import flowRight from "lodash.flowright";
import React, { Component } from "react";
import { graphql } from "react-apollo";
// GraphQL Operations
import { GET_CART_HIDDEN, GET_CATEGORIES } from "../../graphql/queries";
import Header from "./header";

class HeaderContainer extends Component {
  render() {
    const { categories } = this.props.items;
    return (
      <Header
        isCartHidden={this.props.data.isCartHidden}
        categories={categories}
      />
    );
  }
}

export default flowRight(
  graphql(GET_CART_HIDDEN),
  graphql(GET_CATEGORIES, { name: "items" })
)(HeaderContainer);
