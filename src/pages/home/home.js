import { Component } from "react";
import { Container } from "./styles";
import CollectionItem from "../../components/collection-item";

class Home extends Component {
  render() {
    const PRODUCTS = this.props.data.category.products;
    return (
      <Container>
        <h2>Category name</h2>
        <div className="products-container">
          {PRODUCTS.map((data) => {
            return <CollectionItem data={data} />;
          })}
        </div>
      </Container>
    );
  }
}

export default Home;
