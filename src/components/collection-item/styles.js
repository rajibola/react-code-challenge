import styled from "styled-components";

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
    justify-content: center;
    align-items: center;

    .icon {
      position: absolute;
      left: 0;

      /* make the top edge of .inner appear in the vertical center of .outer */
      top: 50%;

      /* move .inner up by half of its height so that its middle is in the middle of .outer */
      transform: translateY(-50%);

      height: 20px;
      width: 100%;
      color: white;
    }
  }
`;
