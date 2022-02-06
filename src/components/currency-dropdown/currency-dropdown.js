import { Component, createRef } from "react";
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg";
import { Container, DropDown, StyledDropDown } from "./styles";

class CurrencyDropdown extends Component {
  state = {
    show: false,
  };

  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({ show: false });
    }
  };

  changeSymbol = async (symbol) => {
    this.props.setCurrency(symbol);
    this.setState({ show: false });
  };
  render() {
    const { data, currency } = this.props;
    return (
      <div>
        <Container onClick={() => this.setState({ show: true })}>
          {currency} <StyledDropDown className="arrow" show={this.state.show} />
        </Container>
        <DropDown
          className="dropdown"
          show={this.state.show}
          ref={this.wrapperRef}
        >
          {data.map(({ label, symbol }) => {
            return (
              <div className="list" onClick={() => this.changeSymbol(symbol)}>
                {label} {symbol}
              </div>
            );
          })}
        </DropDown>
      </div>
    );
  }
}

export default CurrencyDropdown;
