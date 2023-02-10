import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, InputValue } from '../components/Input';
import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';
import { validateInput } from '../utils/validateInput';
import { numberInput } from '../utils/numberInput';

export const EditScreen = (props: any) => {
  const item = props.route.params.item;

  const [name, setName] = useState<InputValue>(item.name);
  const [description, setDescription] = useState<InputValue>(item.description);
  const [quantity, setQuantity] = useState<InputValue>(String(item.quantity));
  const { update } = useDb();
  const navigation = useNavigation();
  
  const updateItem = () => {
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
      return;
    }

    update({ id: item.id, name: String(name), description: String(description), quantity: Number(quantity) })
    
    navigation.goBack();
  }

  return (
    <Layout>

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
      
      <Button title="Módosítások mentése" onPress={updateItem} />
      
    </Layout>
  );
}
