import React, { Component } from "react";
import { Query } from "react-apollo";

import CollectionPage from "./collection";
// import Spinner from '../../components/spinner/spinner.component';

// GraphQL Operations
import { GET_COLLECTION_BY_CATEGORY } from "../../graphql/queries";

class CollectionPageContainer extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query
        query={GET_COLLECTION_BY_CATEGORY}
        variables={{ title: match?.params?.collectionId }}
      >
        {({ data, loading, error }) => {
          if (loading) return <div>SPINNER</div>;
          if (error) return <h2>Error: {error.message}</h2>;

          return (
            data?.category.products && (
              <CollectionPage collection={data?.category.products} />
            )
          );
        }}
      </Query>
    );
  }
}

export default CollectionPageContainer;
