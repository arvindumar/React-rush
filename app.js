// const heading = React.createElement("h1", {id: "heading"}, "Jai Ho!");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//   const para = React.createElement("p", {}, "Lorem10");
// //   root.render(para);
// // root.appendChild(para);
// root.render(heading);

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm a h1 tag!</h1>
 *      </div>
 * </div>
 *
 */
// CREATE THE NESTED STRUCTURE LIKE ABOVE
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm a h1 tag")
//   )
// );
// TO CREATE THE SIBLINGS PUT REACT.create in array
/**
 * <div id="parent">
 *      <h1>Name is H1 tag</h1>
 *      <h2>Name is h2 tag</h2>
 * </div>
 *
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("H1", {}, "Name is h1 Tag"),
  React.createElement("h2", {}, "Name is h2 tag"),
]);
//OR we do it like this
// const heading1=React.createElement("H1", {}, "Name is h1 Tag");
// const heading2=React.createElement("h2", {}, "Name is h2 tag");
// const parent = React.createElement("div", { id: "parent" }, [heading1,heading2]); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
