import { gql } from "apollo-boost";

// --- Cart Related Mutations ---
// Toggle isCartHidden (Boolean)
export const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

export const CLEAR_CART_ITEMS = gql`
  mutation ClearCartItems {
    clearCartItems @client
  }
`;
