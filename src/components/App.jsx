import React, {useState} from "react";
// import emojipedia from "../emojipedia";
// import Heading from "./Heading";
// import Emoji from "./Emoji";

function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count+1);
  }
  function decrementCount(){
    setCount(count-1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

// function createEmoji(emojipedia) {
//   return (
//     <Emoji
//       key={emojipedia.id}
//       emoji_img={emojipedia.emoji}
//       name={emojipedia.name}
//       desc={emojipedia.meaning}
//     />
//   );
// }

// function App() {
//   return (
//     <div>
//       <Heading />
//       {emojipedia.map(createEmoji)}
//     </div>
//   );
// }

export default App;
