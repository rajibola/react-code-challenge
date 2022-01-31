import { gql } from "apollo-boost";

// --- Cart Related Queries ---
// isCartHidden
export const GET_CART_HIDDEN = gql`
  query {
    isCartHidden @client
  }
`;

// ----- Server-side Queries -----
// --- Collection Related Queries ---
// TYPE: Query, FIELD: collections
export const GET_COLLECTIONS = gql`
  query {
    categories {
      name
      products {
        id
        name
        brand
        gallery
        inStock
        prices {
          amount
          currency {
            symbol
            label
          }
        }
      }
    }
  }
`;

// TYPE: Query, FIELD: getCollectionsByCategory, VARIABLES: title:String
export const GET_COLLECTION_BY_CATEGORY = gql`
  query GetCollectionByCategory($title: String!) {
    category(input: { title: $title }) {
      products {
        id
        name
        brand
        category
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        gallery
        inStock
      }
    }
  }
`;

// TYPE: Query, FIELD: getCollectionsByCategory, VARIABLES: id:String
export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: String!) {
    product(id: $id) {
      id
      name
      brand
      category
      prices {
        amount
        currency {
          symbol
          label
        }
      }
      attributes {
        type
        name
        items {
          value
        }
      }
      gallery
    }
  }
`;
