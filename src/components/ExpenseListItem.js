import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
// export a stateless functional component
// this is just going to render a few pieces of info
// about the individual expense

// render the description, amount, and created at value
// once you create the stateless functional component that
// renders the props passed in, you have to actually
// set that up

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format("$0,0.00")}-
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

// export default ExpenseListItem;
export default ExpenseListItem;
