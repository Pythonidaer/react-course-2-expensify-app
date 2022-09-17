import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

// we can import 3rd party modules
import moment from "moment";

test("should setup set text filter object with text value", () => {
  const text = "Something in";
  const action = setTextFilter(text);
  //   to be doesn't work because exact objects will never be equal
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("should setup set text filter object with default", () => {
  const action = setTextFilter();
  //   to be doesn't work because exact objects will never be equal
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate sort by date action object", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should generate sort by date action object", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
