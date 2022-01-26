import { Component } from "react";
import { Container } from "./styles";
// GraphQL Operations
import { GET_COLLECTION_BY_CATEGORY } from "../../graphql/queries";
import { Query } from "react-apollo";

class HomeContainer extends Component {
  render() {
    return (
      <Query query={GET_COLLECTION_BY_CATEGORY} variables={{ title: "all" }}>
        {({ data, loading, error }) => {
          console.log({ data });
          if (loading) return <h1>SPINNER</h1>;
          if (error) return <h2>Error: {error.message}</h2>;

          return data && data.category.products && <div>GOTTEN DATA</div>;
        }}
      </Query>
    );
  }
}

export default HomeContainer;
