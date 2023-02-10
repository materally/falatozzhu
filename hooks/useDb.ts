import { useEffect, useState } from "react"
import { fetcher } from "../utils/fetcher";

interface Item {
  name: string;
  description: string;
  quantity: number;
}

export const useDb = () => {
  const [items, setItems] = useState<Item | Array<Item>>([]);

  useEffect(() => {
    fetcher('/items').then(setItems);
  }, [])
  
  return { items };
}
