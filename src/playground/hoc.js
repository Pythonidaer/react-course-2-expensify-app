// Higher Order Component
import React from "react";
import ReactDOM from "react-dom";
// Render hijacking
// Prop manipulation
// Abstract state

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

// regular function

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// function we call to generate the HOC
// this is a regular function that returns the HOC
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to view the info</p>
      )}
    </div>
  );
};

// HOC - requireAuthentication
const AuthInfo = requireAuthentication(Info);
// show a message when user is authenticated

// We will get back an alternative version of this component
// the HOC component

const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="These are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById("app")
);
