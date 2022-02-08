import { Component, createRef } from "react";
import { ReactComponent as Minus } from "../../assets/svgs/minus-square.svg";
import { ReactComponent as Plus } from "../../assets/svgs/plus-square.svg";
import { Button, Swatch } from "../../styles";
import { filterPrice, getCartTotal, getVariants } from "../../utils/helpers";
import { Container } from "./styles";

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
                        <Swatch
                          value={value}
                          isSwatch={isSwatch}
                          small
                          key={idx}
                        >
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
        </div>

        <div className="total-section">
          <p className="total-text">Total</p>
          <p className="total-price">
            {this.props.currency}
            {getCartTotal(cartItems, this.props.currency)}
          </p>
        </div>

        <div className="buttons">
          <Button
            small
            secondary
            to="/cart"
            onClick={() => this.props.toggleCart()}
          >
            VIEW BAG
          </Button>
          <Button small disabled>
            CHECK OUT
          </Button>
        </div>
      </Container>
    );
  }
}
