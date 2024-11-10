import React from "react";
import useDebounce from "../hooks/useDebounce";
import useSearch from "../service/search";
import { TextField } from "@mui/material";
const Header = () => {
  return (
    <div>
      <TextField onChange={(e) => console.log(e.target.value)} label="Search" variant="outlined" />
    </div>
  );
};

export default Header;
