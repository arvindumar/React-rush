import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// ReactElement => objects => it takes three args, last is the children

const heading = React.createElement("h1", { id: "heading" }, "Hello React ✌️");
// React Functional Component
// const Heading = () => {
//   return <h1 className="heading">This is react ultimate course</h1>;
// };
const Title2 = () => {
  return <p>This is the Title saying something about the Dom</p>;
};
//we can also use normal function declaration for React Component
const Title = function () {
  return <p>This is the Title saying something about the Dom3</p>;
};
const Heading2 = () => (
  <div id="main">
    {heading}
    {/* we can execute a js / insert any react element using {} */}
    <Title />
    {/* to inject a component in another component */}
    <h1 className="heading">This is react ultimate course</h1>
  </div>
);
// Heading and Heading2 components are same
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // this is how we render a React element
root.render(<Heading2 />); // this is how we render a React Component
