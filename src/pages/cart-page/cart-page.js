import { Component } from "react";
import { Container } from "./styles";
import { CartList } from "../../components/cart-list";

class CartPage extends Component {
  render() {
    const { cartItems, removeItem, addItem, currency } = this.props;
    return (
      <Container>
        <h1>CART</h1>

        <div className="totalItemsContainer">
          {cartItems?.map((cartItem) => {
            return (
              <CartList
                cartItem={cartItem}
                currency={currency}
                removeItem={removeItem}
                addItem={addItem}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}

export default CartPage;
