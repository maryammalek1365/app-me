import { useState } from "react";
export const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)
  const increase = () => {
    setCount((prev) => prev + 1)
  }
  const decrease = () => {
    setCount((prev) => prev - 1)
  }

  const reSet = () => {
    setCount(0)
  }
  return { count, increase, decrease, reSet }
}