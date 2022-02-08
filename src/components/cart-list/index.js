import { Component } from "react";
import { ReactComponent as Minus } from "../../assets/svgs/minus-square.svg";
import { ReactComponent as Plus } from "../../assets/svgs/plus-square.svg";
import { ReactComponent as ChevronLeft } from "../../assets/svgs/chevron-right.svg";
import { Swatch } from "../../styles";
import { filterPrice, getVariants } from "../../utils/helpers";
import { Container } from "./styles";

export class CartList extends Component {
  state = {
    totalImage: this.props?.cartItem?.gallery.length - 1,
    imagePosition: 0,
  };

  onNext = () => {
    let { totalImage, imagePosition } = this.state;
    if (imagePosition === totalImage) return;
    this.setState({ imagePosition: imagePosition + 1 });
  };

  onPrev = () => {
    let { imagePosition } = this.state;
    if (imagePosition === 0) return;
    this.setState({ imagePosition: imagePosition - 1 });
  };

  render() {
    const { brand, name, id, gallery, quantity, prices } = this.props.cartItem;
    const { removeItem, addItem } = this.props;
    const variants = getVariants(id);

    const computedPrice = filterPrice(prices, this.props.currency);
    return (
      <Container key={id} className="list-container">
        <div className="left-container">
          <div>
            <p className="brand">{brand}</p>
            <p className="name">{name}</p>
            <p className="price">{computedPrice}</p>
          </div>

          <div className="optionsContainer">
            {Object.keys(variants)?.map((type, idx) => {
              const isSwatch = type === "Color";
              const value = variants[type];
              return (
                <Swatch value={value} isSwatch={isSwatch} key={idx}>
                  {!isSwatch && value}
                </Swatch>
              );
            })}
          </div>
        </div>

        <div className="right-container">
          <div className="add-remove">
            <Plus
              onClick={() => addItem(this.props.cartItem)}
              className="add"
            />
            <p className="quantity">{quantity}</p>
            <Minus
              onClick={() => removeItem(this.props.cartItem)}
              className="remove"
            />
          </div>
          <div style={{ position: "relative" }} className="image-container">
            {this.state.totalImage > 0 && (
              <ChevronLeft className="chevron-left" onClick={this.onPrev} />
            )}
            <img
              src={gallery[this.state.imagePosition]}
              alt={gallery[this.state.imagePosition]}
              className="image"
            />
            {this.state.totalImage > 0 && (
              <ChevronLeft className="chevron-right" onClick={this.onNext} />
            )}
          </div>
        </div>
      </Container>
    );
  }
}
