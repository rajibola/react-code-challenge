export const filterPrice = (prices, currency) => {
  const filtered = prices.find((price) => price.currency.symbol === currency);
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
