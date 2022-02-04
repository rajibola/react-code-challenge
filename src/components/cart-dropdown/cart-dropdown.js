import { Component } from "react";
import { Swatch } from "../../styles";
import { Container } from "./styles";

export default class CartDropdown extends Component {
  render() {
    const { cartItems, removeItem, addItem } = this.props;
    return (
      <Container>
        <h4 className="header">
          My Bag<span>, {cartItems.length} items</span>
        </h4>
        {cartItems?.map((cartItem) => {
          const { variants, brand, name, id, gallery, quantity } = cartItem;
          return (
            <div key={id} className="list-container">
              <div className="left-container">
                <p className="brand">{brand}</p>
                <p className="name">{name}</p>
                <p className="price">$50.00</p>

                <div style={{ display: "flex", gap: "8px" }}>
                  {Object.keys(variants)?.map((type, idx) => {
                    const isSwatch = type === "Color";
                    const value = variants[type];
                    return (
                      <Swatch value={value} isSwatch={isSwatch} small>
                        {!isSwatch && value}
                      </Swatch>
                    );
                  })}
                </div>
              </div>

              <div className="right-container">
                <div className="add-remove">
                  <Swatch small onClick={() => addItem(cartItem)}></Swatch>
                  <p>{quantity}</p>
                  <Swatch small onClick={() => removeItem(cartItem)}></Swatch>
                </div>
                <img
                  src={gallery[0]}
                  style={{ width: "105px", height: "137px" }}
                />
              </div>
            </div>
          );
        })}
      </Container>
    );
  }
}
