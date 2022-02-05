import { Component } from "react";
import { Query } from "react-apollo";
import { GET_CART_HIDDEN } from "../../graphql/queries";
import { Modal } from "../../styles";

class ModalComponent extends Component {
  render() {
    return (
      <Query query={GET_CART_HIDDEN}>
        {({ data }) => <Modal isHidden={data.isCartHidden} />}
      </Query>
    );
  }
}

export default ModalComponent;
