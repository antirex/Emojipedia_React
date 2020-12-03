import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Input from "./Input";

function App2() {
  const [list, setList] = useState([]);
  
  function handleClick(item) {
    if (item) {
      setList((prevItem) => [...prevItem, item]);
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
      <Input 
      onAdd = {handleClick}
      />
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
