import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { filterPrice } from "../../utils/helpers";
import { CardStyle } from "./styles";

class CollectionItem extends Component {
  render() {
    const { inStock, prices, gallery, name, category, id } = this.props.data;
    const price = filterPrice(prices, this.props.currency);

    return (
      <Link to={category + "/" + id}>
        <CardStyle inStock={inStock}>
          <img src={gallery?.[0]} className="image" alt="product" />
          <div className="cart-icon">
            <CartIcon className="icon" fill="#fff" />
          </div>
          <p className="name">{name}</p>
          <h5 className="amount">{price}</h5>
          {!inStock && <div className="out-of-stock">OUT OF STOCK</div>}
        </CardStyle>
      </Link>
    );
  }
}

export default CollectionItem;
