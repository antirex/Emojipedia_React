import React, { useState } from "react";

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
    }else alert("Enter some text to add a task!")
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
          {list.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App2;
