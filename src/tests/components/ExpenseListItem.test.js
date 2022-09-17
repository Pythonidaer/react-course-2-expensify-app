import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

/*
{ id, description, amount, createdAt }
*/
// This could have also worked:
// {...expenses[0]} -- gets object and spreads it out
// Would have added all of its properties as props

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(<ExpenseListItem expenses={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
