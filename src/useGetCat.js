import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCat = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Cat"],
    queryFn: async () => {
      const res = await axios.get("https://catfact.ninja/fact");
      return res.data;
    }
  });

  const refetchdata = () => {
    alert("data refetch");
    refetch();
  };

  return { data, isLoading, refetchdata };
};
