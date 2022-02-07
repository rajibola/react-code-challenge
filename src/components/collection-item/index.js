import flowRight from "lodash.flowright";
import React, { Component } from "react";
import { GET_CURRENCY } from "../../graphql/queries";
import { ADD_ITEM_TO_CART } from "../../graphql/mutations";
import CollectionItem from "./collection-item";
import { graphql } from "react-apollo";

class CollectionItemContainer extends Component {
  render() {
    return (
      <CollectionItem
        data={this.props.data}
        currency={this.props.currency.currency}
        addItem={(item) => this.props.addItemToCart({ variables: { item } })}
      />
    );
  }
}

export default flowRight(
  graphql(GET_CURRENCY, { name: "currency" }),
  graphql(ADD_ITEM_TO_CART, { name: "addItemToCart" })
)(CollectionItemContainer);
