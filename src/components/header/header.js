import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartDropdown from "../cart-dropdown";

import { Container } from "./styles.js";
import CartIcon from "../cart-icon";
import CurrencyDropdown from "../currency-dropdown";

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
          {this.props?.categories?.map(({ name }, id) => {
            return (
              <NavLink
                to={`/${name}`}
                className="option"
                activeClassName="active"
                key={id}
              >
                <p>{name}</p>
              </NavLink>
            );
          })}
        </div>
        <Logo className="logo" />
        <div className="right-section">
          <CurrencyDropdown />
          <CartIcon />
          {!isCartHidden && <CartDropdown />}
        </div>
      </Container>
    );
  }
}

export default Header;
