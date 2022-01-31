import { Component } from "react";
import { Swatch, Button } from "../../styles";
import { filterPrice } from "../../utils/helpers";
import { Container } from "./styles";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.product.gallery?.[0],
      currency: "$",
    };
  }

  renderSwatchSection = () => {
    const { brand, name, attributes, prices, description } = this.props.product;
    return (
      <div className="swatch-section">
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
        {attributes.map((attribute) => {
          const { name, items, type } = attribute;
          const isSwatch = type === "swatch";
          return (
            <>
              <div className="attribute-name">{name}:</div>
              <div className="attribute">
                {items.map(({ value }) => {
                  return (
                    <Swatch value={value} isSwatch={isSwatch}>
                      {!isSwatch && value}
                    </Swatch>
                  );
                })}
              </div>
            </>
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
      </div>
    );
  };

  render() {
    const { currentImage } = this.state;
    const { gallery } = this.props.product;

    return (
      <Container>
        <div className="type-section">
          {gallery?.map((image) => {
            return (
              <img
                src={image}
                key={image}
                alt={image}
                className="image"
                onClick={() => this.setState({ currentImage: image })}
              />
            );
          })}
        </div>
        <div>
          <img src={currentImage} className="product-view" alt={currentImage} />
        </div>
        {this.renderSwatchSection()}
      </Container>
    );
  }
}
