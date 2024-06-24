
const heading1 = React.createElement("h1",{},"i'm h1 of child1");
const heading2 = React.createElement("h2",{},"i'm h2 of child1");
const heading3 = React.createElement("h1",{},"i'm h1 of child2");
const heading4 = React.createElement("h2",{},"i'm h2 of child2");
const child1 = React.createElement("div",{id: "child1"},[heading1,heading2]);
const child2 = React.createElement("div",{id: "child2"},[heading3,heading4]);
const parent = React.createElement("div",{id: "parent"},[child1,child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// what are npm packages