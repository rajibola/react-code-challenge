import React from "react";
import { NavLink } from "react-router-dom";

// import { auth } from "../../firebase/firebase.utils";
// import { default as CartIcon } from "../cart-icon/cart-icon.container";
// import { default as CartDropdown } from "../cart-dropdown/cart-dropdown.container";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { Container } from "./styles.js";

const navigations = [
  { name: "women", to: "/", exact: true },
  { name: "men", to: "/product", exact: false },
  { name: "kids", to: "/kids", exact: false },
];

const Header = ({ currentUser, isCartHidden, clearCartItems }) => (
  <Container>
    <div className="left-section">
      {navigations.map(({ name, to, exact }) => {
        return (
          <NavLink
            exact={exact}
            to={to}
            className="option"
            activeClassName="active"
          >
            <p>{name}</p>
          </NavLink>
        );
      })}
    </div>
    <Logo className="logo" />
    <div className="right-section">Right Section</div>
  </Container>
);

export default Header;
