import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((prevValue) => !prevValue);
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.listItem}
    </li>
  );
}

export default ToDoItem;
