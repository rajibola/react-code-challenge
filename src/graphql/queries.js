import { gql } from "apollo-boost";

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

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
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
        attributes {
          name
          type
          items {
            value
          }
        }
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
      description
      gallery
    }
  }
`;

export const GET_CURRENCY = gql`
  query {
    currency @client
  }
`;
// --- Cart Related Queries ---
// isCartHidden
export const GET_CART_HIDDEN = gql`
  query {
    isCartHidden @client
  }
`;

// cartItems
export const GET_CART_ITEMS = gql`
  query {
    cartItems @client
  }
`;

// itemCount
export const GET_ITEM_COUNT = gql`
  query {
    itemCount @client
  }
`;

export const GET_ITEMS_CURRENCY = gql`
  query {
    cartItems @client
    currency @client
  }
`;
