import { gql } from "apollo-boost";
import {
  addItemToCart,
  clearItemFromCart,
  getCartItemCount,
  removeItemFromCart,
} from "./cart.utils";
import {
  GET_CART_HIDDEN,
  GET_CART_ITEMS,
  GET_CURRENCY,
  GET_ITEM_COUNT,
} from "./queries";

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Currency {
    currency: String!
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    ClearCartItems: [Item]!
    SetCurreny(currency: Currency!): Currency
  }
`;

const updateCartItemsRelatedQueries = (cache, newCartItems) => {
  // Calculate & cache new itemCount
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: {
      itemCount: getCartItemCount(newCartItems),
    },
  });

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
      try {
        const { isCartHidden } = cache.readQuery({
          query: GET_CART_HIDDEN,
        });
        cache.writeQuery({
          query: GET_CART_HIDDEN,
          data: {
            isCartHidden: !isCartHidden,
          },
        });

        return !isCartHidden;
      } catch {
        cache.writeQuery({
          query: GET_CART_HIDDEN,
          data: {
            isCartHidden: false,
          },
        });

        return false;
      }
    },

    setCurrency: (_root, { currency }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENCY,
        data: {
          currency,
        },
      });

      return currency;
    },

    addItemToCart: (_root, { item }, { cache }) => {
      try {
        const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });
        const newCartItems = addItemToCart(cartItems, item);
        updateCartItemsRelatedQueries(cache, newCartItems);
        return newCartItems;
      } catch {
        addItemToCart([], item);
        updateCartItemsRelatedQueries(cache, [item]);
        return [item];
      }
    },

    removeItemFromCart: (_root, { item }, { cache }) => {
      // Get cartItems from local cache
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

      // Remove item from cart
      const newCartItems = removeItemFromCart(cartItems, item);

      updateCartItemsRelatedQueries(cache, newCartItems);

      return newCartItems;
    },

    clearItemFromCart: (_root, { item }, { cache }) => {
      // Get cartItems from local cache
      const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

      // Remove item from cart
      const newCartItems = clearItemFromCart(cartItems, item);

      updateCartItemsRelatedQueries(cache, newCartItems);

      return newCartItems;
    },

    clearCartItems: (_root, _args, { cache }) => {
      updateCartItemsRelatedQueries(cache, []);
    },
  },
};
