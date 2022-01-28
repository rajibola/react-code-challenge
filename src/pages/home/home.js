import { Component } from "react";
import styled from "styled-components";
import { Container } from "./styles";

class Home extends Component {
  render() {
    const PRODUCTS = this.props.data.category.products;
    return (
      <Container>
        <h2>Category name</h2>

        {PRODUCTS.map((data) => {
          return <CardComponent data={data} />;
        })}
      </Container>
    );
  }
}

export default Home;

class CardComponent extends Component {
  render() {
    const { data } = this.props;
    const price = data.prices.find((item) => item.currency.symbol == "$");
    console.log({ price });
    return (
      <CardStyle>
        <img src={data.gallery?.[0]} className="image" />
        <div className="cart-icon" />
        <p className="name">{data.name}</p>
        <h5 className="amount">${price.amount}</h5>
      </CardStyle>
    );
  }
}

export const CardStyle = styled.div`
  width: 384px;
  height: 444px;
  padding: 16px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  &:hover > .cart-icon {
    visibility: visible;
    opacity: 1;
  }

  .image {
    width: 354px;
    height: 330px;
    object-fit: cover;
    object-position: center;
  }

  .name {
    margin-top: 24px;
    font-weight: 300;
    font-size: 18px;
    line-height: 28.8px;
  }

  .amount {
    font-size: 18px;
    line-height: 28.8px;
    /* font-weight: 500; */
  }

  .cart-icon {
    width: 52px;
    height: 52px;
    position: absolute;
    top: 320px;
    right: 31px;
    border-radius: 52px;
    visibility: hidden;
    background-color: #5ece7b;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
  }
`;
