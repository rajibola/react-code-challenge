import React, { Component } from "react";
import { CardStyle } from "./styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

export default class CollectionItem extends Component {
  render() {
    const { inStock, prices, gallery, name } = this.props.data;
    const price = prices.find((item) => item.currency.symbol === "$");

    return (
      <CardStyle inStock={inStock}>
        <img src={gallery?.[0]} className="image" alt="product" />
        <div className="cart-icon">
          <CartIcon className="icon" fill="#fff" />
        </div>
        <p className="name">{name}</p>
        <h5 className="amount">${price.amount}</h5>
        {!inStock && <div className="out-of-stock">OUT OF STOCK</div>}
      </CardStyle>
    );
  }
}
