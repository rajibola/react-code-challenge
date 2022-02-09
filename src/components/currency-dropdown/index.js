import flowRight from "lodash.flowright";
import { Component } from "react";
import { graphql } from "react-apollo";
import { SET_CURRENCY } from "../../graphql/mutations";
import { GET_CURRENCIES, GET_CURRENCY } from "../../graphql/queries";
import CurrencyDropdown from "./currency-dropdown";

class CurrencyDropdownContainer extends Component {
  render() {
    const {
      data: { currencies },
      setCurrency,
      getCurrency,
    } = this.props;
    return (
      <CurrencyDropdown
        data={currencies}
        setCurrency={(currency) => setCurrency({ variables: { currency } })}
        currency={getCurrency.currency}
      />
    );
  }
}

export default flowRight(
  graphql(GET_CURRENCIES),
  graphql(GET_CURRENCY, { name: "getCurrency" }),
  graphql(SET_CURRENCY, { name: "setCurrency" })
)(CurrencyDropdownContainer);
