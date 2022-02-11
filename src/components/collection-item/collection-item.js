import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/svgs/cart.svg";
import { filterPrice, normarlize } from "../../utils/helpers";
import { CardStyle, Container, IconContainer } from "./styles";

class CollectionItem extends Component {
  addItemtoCart = () => {
    const { attributes } = this.props.data;
    const myObject = {};
    if (attributes.length) {
      attributes.map(({ name, items }) => (myObject[name] = items[0].value));
    }
    let selectedItem = normarlize(this.props.data, myObject);
    return this.props.addItem(selectedItem);
  };

  render() {
    const { inStock, prices, gallery, name, category, id, brand } =
      this.props.data;
    console.log("PRORP", this.props.data);
    const price = filterPrice(prices, this.props.currency);

    return (
      <Container inStock={inStock}>
        <CardStyle
          inStock={inStock}
          onClick={() => this.props.history.push(category + "/" + id)}
        >
          <img src={gallery?.[0]} className="image" alt="product" />
          <p className="name">
            {brand} {name}
          </p>
          <p className="amount">{price}</p>
          {!inStock && <div className="out-of-stock">OUT OF STOCK</div>}
        </CardStyle>
        <IconContainer
          className="cart-icon"
          onClick={() => this.addItemtoCart()}
          inStock={inStock}
        >
          <CartIcon className="icon" fill="#fff" />
        </IconContainer>
      </Container>
    );
  }
}

export default withRouter(CollectionItem);
