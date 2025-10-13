import { useGetCat } from "./useGetCat";
export const Cat = () => {
  const { data: catdata, isloading, refetchdata } = useGetCat();
  if (isloading) return <h2>loding...</h2>
  return (
    <div>
      <h1>{catdata?.fact}</h1>
    </div>
  )
}