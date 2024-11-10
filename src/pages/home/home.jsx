import { Button, Container, Grid2 } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Card from "../../components/Card";
import useGetProduct from "./service/request/useGetProduct";

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetProduct(page);

  return (
    <Container>
      <Header />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid2 container spacing={"20px"}>
          {data.products?.map((item) => (
            <Grid2 size={4} key={item.id}>
              <Card key={item.id} {...item} />
            </Grid2>
          ))}
        </Grid2>
      )}
      <Grid2 maxWidth={"400px"} marginX={"auto"}>
        {Array(data?.totalPages)
          .fill(null)
          .map((item, index) => (
            <Button key={index} onClick={() => setPage(index + 1)}>
              {index + 1}
            </Button>
          ))}
      </Grid2>
    </Container>
  );
};

export default Home;
