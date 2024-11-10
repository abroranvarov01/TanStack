import React from "react";
import { useDebounce } from "../hooks/useDebounce";
import useSearch from "../service/search";
import { Button, Stack, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const [input, setinput] = React.useState("");
  const debounce = useDebounce(input);
  const { data, isLoading } = useSearch(debounce);

  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <TextField
          onChange={(e) => setinput(e.target.value)}
          label="Search"
          variant="outlined"
        />

        <Link to="/computer">
          <Button>Cart</Button>
        </Link>
      </Stack>
      {!isLoading && (
        <Stack>
          {data.map((item) => (
            <Stack
              direction={"row"}
              alignItems={"center"}
              p="20px"
              border={"1px solid grey"}
              key={item.id}
            >
              <img style={{ width: "150px" }} src={item.img} />
              <h3>{item.title}</h3>
            </Stack>
          ))}
        </Stack>
      )}
    </div>
  );
};

export default Header;
