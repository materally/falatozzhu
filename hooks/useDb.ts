import { useState } from "react"
import { fetcher } from "../utils/fetcher";
import { randomId } from "../utils/randomId";
import { Item } from "./model";

export const useDb = () => {
  const [items, setItems] = useState<Array<Item>>([]);

  const getItems = () => fetcher('/items').then(setItems);

  const create = ({ name, description, quantity }: Item) => {
    const newItem = {
      id: randomId(),
      name, 
      description, 
      quantity
    }
    
    fetcher('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
  }
  
  return { items, create, getItems };
}
