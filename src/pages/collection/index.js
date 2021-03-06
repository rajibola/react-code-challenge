import React, { Component } from "react";
import { Query } from "react-apollo";
import Error from "../../components/error";
import Loading from "../../components/loading";
import { GET_COLLECTION_BY_CATEGORY } from "../../graphql/queries";
import CollectionPage from "./collection";

class CollectionPageContainer extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query
        query={GET_COLLECTION_BY_CATEGORY}
        variables={{ title: match?.params?.collectionId }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error message={error.message} />;

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
