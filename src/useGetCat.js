import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export const useGetCat = () => {
  const { data, isloading, refetch } = useQueries(["Cat"],
    async () => {
      return axios.get("http://catfact.nninja/fact")
        .then((res) => res.data);
    }
  );
  const refetchdata = () => {
    alert("data refetch")
  }
  return { data, isloading, refetchdata }
}