import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

// const EditExpensePage = () => <div>This is my edit component</div>;

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // Dispatch the action to edit the expense
    this.props.editExpense(this.props.expense.id, expense);

    // Redirect to the dashboard
    this.props.history.push("/");

    console.log("updated", expense);
  };
  onRemove = () => {
    // allows us to remove expenses from store
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
