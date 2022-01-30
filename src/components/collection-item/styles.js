import styled from "styled-components";

export const CardStyle = styled.div`
  width: 384px;
  height: 444px;
  padding: 16px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    ${({ inStock }) =>
      inStock && `box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);`}
  }

  &:hover > .cart-icon {
    ${({ inStock }) => inStock && `visibility: visible;`}
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

  .out-of-stock {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: auto;
    padding-top: 167px;
    text-align: center;
    color: #8d8f9a;
    font-size: 24px;
    line-height: 160%;
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
    justify-content: center;
    align-items: center;

    .icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 20px;
      width: 100%;
      color: white;
    }
  }
`;
