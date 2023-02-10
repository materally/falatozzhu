import { useEffect, useState } from "react"
import { fetcher } from "../utils/fetcher";
import { Item } from "./model";

export const useDb = () => {
  const [items, setItems] = useState<Array<Item>>([]);

  useEffect(() => {
    fetcher('/items').then(setItems);
  }, [])
  
  return { items };
}
