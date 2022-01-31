import { Component } from "react";
import { Container, Swatch } from "./styles";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: this.props.product.gallery?.[0] };
  }

  // renderProductView() {
  //   return (
  //     <div className="swatch-section">
  //       <p className="brand">{brand}</p>
  //       <p className="name">{name}</p>
  //     </div>
  //   );
  // }

  render() {
    const { currentImage } = this.state;
    const { gallery, brand, name, attributes } = this.props.product;
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
          {currentImage ? (
            <img src={currentImage} className="product-view" />
          ) : (
            <h2>Error Image</h2>
          )}
        </div>
        <div className="swatch-section">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          {attributes.map((attribute) => {
            const { name, items, type } = attribute;
            return (
              <>
                <div className="attribute-name">{name}:</div>
                <div className="attribute">
                  {items.map(({ value }) => {
                    return (
                      <Swatch value={value} isSwatch={type === "swatch"}>
                        {!(type === "swatch") && value}
                      </Swatch>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </Container>
    );
  }
}
