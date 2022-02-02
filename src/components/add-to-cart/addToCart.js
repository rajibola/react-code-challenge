import { Component } from "react";
import { Button, Swatch } from "../../styles";
import { filterPrice } from "../../utils/helpers";
import { Container } from "./styles";

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "$",
      cartItem: null,
    };
  }

  componentDidMount() {
    const { attributes } = this.props.item;
    const myObject = {};
    if (attributes.length) {
      attributes.map(({ name, items }) => (myObject[name] = items[0].value));
    }
    this.setState({ cartItem: myObject });
  }

  selectAttribute = (name, value) => {
    const newState = this.state.cartItem;
    newState[name] = value;
    this.setState({ cartItem: newState });
  };

  render() {
    console.log(this.state?.cartItem);
    const { brand, name, attributes, prices, description } = this.props.item;
    return (
      <Container>
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
        {attributes.map((attribute, i) => {
          console.log({ attribute });
          const { name, items, type } = attribute;
          const isSwatch = type === "swatch";
          return (
            <div key={i}>
              <div className="attribute-name">{name}:</div>
              <div className="attribute">
                {items.map(({ value }, idx) => {
                  const isSelected = this.state?.cartItem?.[name] === value;
                  return (
                    <Swatch
                      value={value}
                      isSwatch={isSwatch}
                      key={idx}
                      isSelected={isSelected}
                      onClick={() => this.selectAttribute(name, value)}
                    >
                      {!isSwatch && value}
                    </Swatch>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="price-tag">Price:</div>
        <div className="price">{filterPrice(prices, this.state.currency)}</div>

        <Button>ADD TO CART</Button>

        <div
          className="description"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, "<br />"),
          }}
        />
      </Container>
    );
  }
}
