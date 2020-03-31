import rates from "../data/rates";

function calculateRate(source, target) {
  if (source == target) return 1;

  let item = rates.find(item => item.source == source && item.target == target);
  if (item) return item.rate;

  item = rates.find(item => item.source == target && item.target == source);
  if (item) return 1 / item.rate;

  throw "Convertion not supported";
}

function getCurrencies() {
  let currencies = [];

  rates.forEach(item => {
    if (!currencies.includes(item.source)) currencies.push(item.source);
    if (!currencies.includes(item.target)) currencies.push(item.target);
  });

  return currencies;
}

const currencies = getCurrencies();

export { calculateRate, currencies };
