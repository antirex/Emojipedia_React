import React,{useState} from "react";
function Input(props) {
  const [item, setItem] = useState();
  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }
  return (
    <div>
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
        <button onClick={()=>{
          props.onAdd(item);
          setItem("");
        }}>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
export default Input;
