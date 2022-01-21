import { gql } from "apollo-boost";

// --- Cart Related Queries ---
// isCartHidden
export const GET_CART_HIDDEN = gql`
  query {
    isCartHidden @client
  }
`;
