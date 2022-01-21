import React from "react";
import { Query } from "react-apollo";

import Header from "./header";

// GraphQL Operations
import { GET_CART_HIDDEN } from "../../graphql/queries";

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data }) => <Header isCartHidden={data.isCartHidden} />}
  </Query>
);

export default HeaderContainer;
