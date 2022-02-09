/**
 *
 * @param {array} prices
 * @param {string} currency
 * @param {boolean} isPrice
 * @returns {string} amount filtered
 */

export const filterPrice = (prices, currency, isPrice) => {
  const filtered = prices.find((price) => price.currency.symbol === currency);
  if (isPrice) return filtered?.amount;
  return currency + filtered?.amount;
};

/**
 *
 * @param {object} item
 * @param {object} variants
 * @returns {object} A new item object with coded id
 */
export let normarlize = (item, variants) => {
  let { prices, name, brand, gallery, id } = item;
  let cartId = id + "%" + JSON.stringify(variants);

  return {
    prices,
    name,
    brand,
    gallery,
    id: cartId,
  };
};

/**
 *
 * @param {string} id
 * @returns {object} decoded variants objects coded in the id param
 */

export let getVariants = (id) =>
  JSON.parse(id.split("%").filter((_, idx) => idx)[0]);

/**
 *
 * @param {array} cartItems
 * @param {string} currency
 * @returns {number} computed total price of the cart items
 */

export const getCartTotal = (cartItems, currency) =>
  cartItems
    .reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity +
        cartItem.quantity * filterPrice(cartItem.prices, currency, true),
      0
    )
    .toFixed(2);
