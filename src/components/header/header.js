import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import CartDropdown from '../cart-dropdown';
import CartIcon from '../cart-icon';
import CurrencyDropdown from '../currency-dropdown';
import { Container } from './styles.js';

class Header extends Component {
  state = {
    isCartToggled: false,
  };

  render() {
    const { isCartHidden } = this.props;

    return (
      <Container>
        <div className='left-section'>
          {this.props?.categories?.map(({ name }, id) => {
            return (
              <NavLink
                to={`/collection/${name}`}
                className='option'
                activeClassName='active'
                key={id}
              >
                <p>{name}</p>
              </NavLink>
            );
          })}
        </div>
        <Logo className='logo' />
        <div className='right-section'>
          <CurrencyDropdown />
          <CartIcon />
          {!isCartHidden && <CartDropdown />}
        </div>
      </Container>
    );
  }
}

export default Header;
