import { gql } from "apollo-boost";
import { GET_CART_HIDDEN } from "./queries";

export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      // Get isCartHidden value from local cache
      const { isCartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });

      // Toggle isCartHidden value & write new value to cache
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: {
          isCartHidden: !isCartHidden,
        },
      });

      return !isCartHidden;
    },
  },
};
