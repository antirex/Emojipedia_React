import React from "react";
import Title from "./Title";
import Details from "./Details";

function Emoji(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <Title image={props.emoji_img} emoji_name={props.name} />
        <Details emoji_desc={props.desc} />
      </div>
    </dl>
  );
}

export default Emoji;
