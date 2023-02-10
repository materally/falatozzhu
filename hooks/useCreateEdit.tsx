import { useState } from "react";
import { Alert } from "react-native";
import { Input, InputValue } from "../components/Input";
import { numberInput } from "../utils/numberInput";
import { validateInput } from "../utils/validateInput";
import { Item } from "./model";

interface Props {
  item?: Item
}

export const useCreateEdit = ({ item }: Props) => {
  const [name, setName] = useState<InputValue>(item?.name || '');
  const [description, setDescription] = useState<InputValue>(item?.description || '');
  const [quantity, setQuantity] = useState<InputValue>(typeof item?.quantity === "undefined" ? '' : String(item?.quantity));

  const validated = () => {
    let hasError = false;

    if(!validateInput(name)) {
      setName(undefined);
      hasError = true;
    }

    if(!validateInput(description)) {
      setDescription(undefined);
      hasError = true;
    }

    if(!validateInput(quantity)) {
      setQuantity(undefined);
      hasError = true;
    }

    if(hasError){
      Alert.alert('Hiba! Minden mező kitöltése kötelező!');
      return false;
    }

    return true;
  }

  const renderInputs = () => {
    return (
      <>
        <Input 
          title="Név"
          value={name} 
          onChangeText={setName} 
          placeholder="Név"
          error={name === undefined}
        />

        <Input 
          title="Rövid leírás"
          value={description} 
          onChangeText={setDescription} 
          placeholder="Rövid leírás"
          error={description === undefined}
        />

        <Input
          keyboardType="number-pad"
          title="Mennyiség"
          value={quantity} 
          onChangeText={(value) => numberInput({value, setter: setQuantity})} 
          placeholder="Mennyiség"
          error={quantity === undefined}
        />
      </>
    )
  }
  
  return { name, setName, description, setDescription, quantity, setQuantity, validated, renderInputs }
}