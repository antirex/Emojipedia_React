import React from "react";

function Emoji(props){
  return(
    <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji_img}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.desc}
          </dd>
        </div>
      </dl>
  );
}

export default Emoji;