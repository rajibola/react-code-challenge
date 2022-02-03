import { Component } from "react";
import { Query } from "react-apollo";
import { GET_CART_ITEMS } from "../../graphql/queries";
import { Container } from "./styles";

class CartDropdown extends Component {
  render() {
    return (
      <Query query={GET_CART_ITEMS}>
        {({ data }) => {
          return (
            <Container>
              <h4>My Bag, 2 items</h4>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default CartDropdown;

// const data = [
//   {
//     name: "Apollo Running Short",
//     price: "50.00",
//     type: "s",
//     rate: 1,
//   },
//   {
//     name: "Jupiter Wayfarer",
//     price: "70.00",
//     type: "s",
//     rate: 2,
//   },
// ];
