import { gql } from "apollo-boost";
import { addItemToCart } from "./cart.utils";
import { GET_CART_HIDDEN, GET_CART_ITEMS } from "./queries";

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`;

const updateCartItemsRelatedQueries = (cache, newCartItems) => {
  // Update cartItems array in local cache => with newCartItems
  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: {
      cartItems: newCartItems,
    },
  });
};

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

    addItemToCart: (_root, { item }, { cache }) => {
      // Get cartItems from local cache
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

      // Add new item to cart => returns newCartItems array
      const newCartItems = addItemToCart(cartItems, item);

      updateCartItemsRelatedQueries(cache, newCartItems);

      return newCartItems;
    },
  },
};
