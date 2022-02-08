import { Component } from "react";
import { ReactComponent as Minus } from "../../assets/minus-square.svg";
import { ReactComponent as Plus } from "../../assets/plus-square.svg";
import { Swatch } from "../../styles";
import { filterPrice, getVariants } from "../../utils/helpers";
import { Container } from "./styles";

class CartPage extends Component {
  render() {
    const { cartItems, removeItem, addItem } = this.props;
    return (
      <Container>
        <h1>CART</h1>

        <div className="totalItemsContainer">
          {cartItems?.map((cartItem) => {
            const { brand, name, id, gallery, quantity, prices } = cartItem;
            const variants = getVariants(id);

            const computedPrice = filterPrice(prices, this.props.currency);
            return (
              <div key={id} className="list-container">
                <div className="left-container">
                  <div>
                    <p className="brand">{brand}</p>
                    <p className="name">{name}</p>
                    <p className="price">{computedPrice}</p>
                  </div>

                  <div className="optionsContainer">
                    {Object.keys(variants)?.map((type, idx) => {
                      const isSwatch = type === "Color";
                      const value = variants[type];
                      return (
                        <Swatch value={value} isSwatch={isSwatch} key={idx}>
                          {!isSwatch && value}
                        </Swatch>
                      );
                    })}
                  </div>
                </div>

                <div className="right-container">
                  <div className="add-remove">
                    <Plus onClick={() => addItem(cartItem)} className="add" />
                    <p className="quantity">{quantity}</p>
                    <Minus
                      onClick={() => removeItem(cartItem)}
                      className="remove"
                    />
                  </div>
                  <img src={gallery[0]} alt={gallery[0]} className="image" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default CartPage;
