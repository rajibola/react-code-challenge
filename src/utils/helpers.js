export const filterPrice = (prices, currency) => {
  const filtered = prices.find((price) => price.currency.symbol === currency);
  return currency + filtered?.amount;
};
