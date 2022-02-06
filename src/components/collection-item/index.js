import flowRight from "lodash.flowright";
import React, { Component } from "react";
import { GET_CURRENCY } from "../../graphql/queries";
import CollectionItem from "./collection-item";
import { graphql } from "react-apollo";

class CollectionItemContainer extends Component {
  render() {
    console.log("DATA", this.props);
    return (
      <CollectionItem
        data={this.props.data}
        currency={this.props.currency.currency}
      />
    );
  }
}

export default flowRight(graphql(GET_CURRENCY, { name: "currency" }))(
  CollectionItemContainer
);
