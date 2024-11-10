import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

const useSearch = (input = "") => {
  return useQuery({
    queryKey: ["search"],
    queryFn: () =>
      request.get("/phones", {
        params: {
          title_like: input ? input : "00000",
        },
      }),
  });
};

export default useSearch;
