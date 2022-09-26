import expenses from "../tests/fixtures/expenses";

export default (expenses) =>
  expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
