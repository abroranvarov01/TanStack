import React from "react";
import useGetInf from "./service/query/useGetInf";
import { useInView } from "react-intersection-observer";
import { Container, Grid2 } from "@mui/material";
import Card from "../../components/Card";
const InfScrol = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetInf();
  const { ref, inView } = useInView();
  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid2 container spacing={"20px"}>
          {data.pages?.map((page) =>
            page.map((item) => (
              <Grid2 size={4} key={item.id}>
                <Card key={item.id} {...item} />
              </Grid2>
            ))
          )}
        </Grid2>
      )}
      {hasNextPage ? <h1 ref={ref}>Loading...</h1> : ""}
    </Container>
  );
};

export default InfScrol;
