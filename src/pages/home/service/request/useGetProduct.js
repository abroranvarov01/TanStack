import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

const useGetProduct = (pageParam = 1, limit = 6) => {
  return useQuery({
    queryKey: ["product", pageParam],
    queryFn: () =>
      request
        .get("/phones", { params: { _page: pageParam, _limit: limit } })
        .then((res) => {
          const totalCount = res.headers["x-total-count"];
          const totalPages = Math.ceil(totalCount / limit);
          return { products: res.data, totalCount, totalPages };
        }),
  });
};

export default useGetProduct;
