import { Component } from "react";
import { Query } from "react-apollo";
import Error from "../../components/error";
import Loading from "../../components/loading";
import { GET_PRODUCT_BY_ID } from "../../graphql/queries";
import { Details } from "./details";

export default class DetailsContainer extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query
        query={GET_PRODUCT_BY_ID}
        variables={{ id: match?.params?.productId }}
      >
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error message={error.message} />;

          return data?.product && <Details product={data?.product} />;
        }}
      </Query>
    );
  }
}
