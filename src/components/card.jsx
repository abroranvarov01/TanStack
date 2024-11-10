import React from "react";
import { Typography } from "@mui/material";
const Card = (props) => {
  return (
    <div>
      <img style={{ width: "100%" }} src={props.img} alt="img" />
      <Typography variant="h4">{props.title}</Typography>
      <Typography>{props.price}</Typography>
    </div>
  );
};

export default Card;
