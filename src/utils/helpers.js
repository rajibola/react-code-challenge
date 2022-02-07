export const filterPrice = (prices, currency, isPrice) => {
  const filtered = prices.find((price) => price.currency.symbol === currency);
  if (isPrice) return filtered?.amount;
  return currency + filtered?.amount;
};

export let normarlize = (props, variants) => {
  let { prices, name, brand, gallery, id } = props.item;
  let cartId = id + " " + JSON.stringify(variants);

  return {
    prices,
    name,
    brand,
    gallery,
    id: cartId,
  };
};

export let getVariants = (id) =>
  JSON.parse(id.split(" ").filter((_, idx) => idx)[0]);

export const getCartTotal = (cartItems, currency) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity +
      cartItem.quantity * filterPrice(cartItem.prices, currency, true),
    0
  );
