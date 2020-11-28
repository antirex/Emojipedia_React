import React from "react";

function Title(props){
  return(
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.image}
      </span>
      <span>
              {props.emoji_name}
      </span>
    </dt>
  );
}
export default Title;