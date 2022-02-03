export const filterPrice = (prices, currency) => {
  const filtered = prices.find((price) => price.currency.symbol === currency);
  return currency + filtered?.amount;
};

export let normarlize = (props, state) => {
  const { prices, name, brand, gallery, id } = props.item;
  const { variants } = state;
  const cartId = id + Object.values(variants).join("");
  return {
    prices,
    variants,
    name,
    brand,
    gallery,
    id: cartId,
  };
};
