import { request } from "../../../../config/request";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetInf = () => {
  return useInfiniteQuery({
    queryKey: ["computer"],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => {
      return request
        .get("/computer", { params: { _page: pageParam, _limit: 6 } })
        .then((res) => res.data);
    },
    getNextPageParam: (lastPage, allPages, lastPageParams) => {
      let last = allPages.length + 1;
      return last < 6 ? last : undefined;
    },
  });
};
export default useGetInf;
