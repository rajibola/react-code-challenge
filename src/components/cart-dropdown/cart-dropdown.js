import { Component, createRef } from "react";
import { Swatch } from "../../styles";
import { Container } from "./styles";
import { ReactComponent as Plus } from "../../assets/plus-square.svg";
import { ReactComponent as Minus } from "../../assets/minus-square.svg";
import { filterPrice } from "../../utils/helpers";

export default class CartDropdown extends Component {
  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.toggleCart();
    }
  };

  render() {
    const { cartItems, removeItem, addItem } = this.props;
    return (
      <Container ref={this.wrapperRef}>
        <h4 className="header">
          My Bag<span>, {cartItems.length} items</span>
        </h4>
        {cartItems?.map((cartItem) => {
          const { variants, brand, name, id, gallery, quantity, prices } =
            cartItem;
          const computedPrice = filterPrice(prices, this.props.currency);
          return (
            <div key={id} className="list-container">
              <div className="left-container">
                <p className="brand">{brand}</p>
                <p className="name">{name}</p>
                <p className="price">{computedPrice}</p>

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
                  <Plus onClick={() => addItem(cartItem)} className="add" />
                  <p>{quantity}</p>
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
      </Container>
    );
  }
}
