import getBudgetObject from './7-getBudgetObject.js'; // eslint-disable-line

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollar (income) { return `$${income}`; },
    getIncomeInEuro (income) { return `${income} euros`; }
  };

  return fullBudget;
}
