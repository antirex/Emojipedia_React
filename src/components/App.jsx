import React, {useState} from "react";
// import emojipedia from "../emojipedia";
// import Heading from "./Heading";
// import Emoji from "./Emoji";

function App() {
const [time, getTime] = useState("TIME");
function showTime(){
  var date = new Date().toLocaleTimeString();
  getTime(date);
}
  return(
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get time</button>
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
