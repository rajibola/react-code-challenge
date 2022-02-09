import { gql } from "apollo-boost";

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

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: String!) {
    product(id: $id) {
      id
      name
      brand
      category
      inStock
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

export const GET_CART_HIDDEN = gql`
  query {
    isCartHidden @client
  }
`;

export const GET_CART_ITEMS = gql`
  query {
    cartItems @client
  }
`;

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
