import "./App.css";

import {TodoHeading, TodoItem, withHover} from "./Todo.jsx";



function App() {
  const HoverableHeading = withHover(TodoHeading);
  const HoverableItem = withHover(TodoItem);
  return <div>
    <HoverableHeading heading="HEADING" />
    <HoverableItem item="Item" />
  </div>;
}

export default App;
