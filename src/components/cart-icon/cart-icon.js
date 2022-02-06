import { Component } from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { Container } from "./styles";

class CartIcon extends Component {
  render() {
    const { toggleCartHidden, itemCount } = this.props;
    return (
      <Container onClick={toggleCartHidden}>
        <Cart />
        {itemCount > 0 && <div className="count">{itemCount}</div>}
      </Container>
    );
  }
}

export default CartIcon;
