import React from "react";

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.img} alt="" />
      </div>
      <Typography>{props.title}</Typography>
      <Typography>{props.desc}</Typography>
    </div>
  );
};

export default Card;
