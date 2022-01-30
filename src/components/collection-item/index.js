import React, { Component } from "react";
import { CardStyle } from "./styles";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

export default class CollectionItem extends Component {
  render() {
    const { data } = this.props;
    const price = data.prices.find((item) => item.currency.symbol === "$");
    console.log({ price });
    return (
      <CardStyle>
        <img src={data.gallery?.[0]} className="image" alt="product" />
        <div className="cart-icon">
          <CartIcon className="icon" fill="#fff" />
        </div>
        <p className="name">{data.name}</p>
        <h5 className="amount">${price.amount}</h5>
      </CardStyle>
    );
  }
}
