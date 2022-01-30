import React from "react";
import { Query } from "react-apollo";

import CollectionPage from "./collection";
// import Spinner from '../../components/spinner/spinner.component';

// GraphQL Operations
import { GET_COLLECTION_BY_CATEGORY } from "../../graphql/queries";

const CollectionPageContainer = ({ match }) => {
  return (
    <Query
      query={GET_COLLECTION_BY_CATEGORY}
      variables={{ title: match?.params?.collectionId || "all" }}
    >
      {({ data, loading, error }) => {
        console.log({ match });
        if (loading) return <div>SPINNER</div>;
        if (error) return <h2>Error: {error.message}</h2>;

        return (
          data &&
          data.category.products && (
            <CollectionPage collection={data?.category.products} />
          )
        );
      }}
    </Query>
  );
};

export default CollectionPageContainer;
