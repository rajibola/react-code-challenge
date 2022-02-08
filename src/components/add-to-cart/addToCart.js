import { Component } from "react";
import { Button, Swatch } from "../../styles";
import { filterPrice, normarlize } from "../../utils/helpers";
import { Container } from "./styles";

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: null,
    };
  }

  componentDidMount() {
    const { attributes } = this.props.item;
    const myObject = {};
    if (attributes.length) {
      attributes.map(({ name, items }) => (myObject[name] = items[0].value));
    }
    this.setState({ variants: myObject });
  }

  selectAttribute = (name, value) => {
    const newState = this.state.variants;
    newState[name] = value;
    this.setState({ variants: newState });
  };

  addItemtoCart = () => {
    if (!this.props.item.inStock) return;
    let selectedItem = normarlize(this.props.item, this.state.variants);
    return this.props.addItem(selectedItem);
  };

  render() {
    const { brand, name, attributes, prices, description, inStock } =
      this.props.item;
    const price = filterPrice(prices, this.props.currency);
    return (
      <Container>
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
        {attributes.map((attribute, i) => {
          const { name, items, type } = attribute;
          const isSwatch = type === "swatch";
          return (
            <div key={i}>
              <div className="attribute-name">{name}:</div>
              <div className="attribute">
                {items.map(({ value }, idx) => {
                  const isSelected = this.state?.variants?.[name] === value;
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
        <div className="price">{price}</div>

        <Button onClick={() => this.addItemtoCart()} disabled={!inStock}>
          {inStock ? "ADD TO CART" : "SOLD OUT"}
        </Button>

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
