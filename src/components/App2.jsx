import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App2() {
  const [item, setItem] = useState();
  const [list, setList] = useState([]);
  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }
  function handleClick() {
    if (item) {
      setList((prevItem) => [...prevItem, item]);
      setItem("");
    } else alert("Enter some text to add a task!");
  }
  function deleteItem(id) {
    setList((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          value={item}
          placeholder="enter your task"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((list, index) => (
            <ToDoItem
              key={index}
              id={index}
              listItem={list}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App2;
