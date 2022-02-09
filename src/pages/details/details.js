import { Component } from "react";
import AddToCart from "../../components/add-to-cart";
import { Container } from "./styles";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.product.gallery?.[0],
      currency: "$",
    };
  }

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
        <img src={currentImage} className="product-view" alt={currentImage} />
        <AddToCart item={this.props.product} />
      </Container>
    );
  }
}
