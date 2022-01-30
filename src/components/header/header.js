import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";
import CartDropdown from "../cart-dropdown";

import { Container } from "./styles.js";
import CartIcon from "../cart-icon";

const navigations = [
  { name: "all", to: "/all" },
  { name: "clothes", to: "/clothes" },
  { name: "tech", to: "/tech" },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartToggled: false,
    };
  }

  render() {
    const { isCartHidden } = this.props;

    return (
      <Container>
        <div className="left-section">
          {navigations.map(({ name, to }) => {
            return (
              <NavLink
                exact
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
        <div className="right-section">
          <div className="currency">
            $ <DownArrow className="arrow" />
          </div>
          <CartIcon />
          {!isCartHidden && <CartDropdown />}
        </div>
      </Container>
    );
  }
}

export default Header;
