import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    getIncomeInDollars: () => `$${Object.values(budget)[0]}`,
    getIncomeInEuros: () => `${Object.values(budget)[0]} euros`,
  };

  return fullBudget;
}
