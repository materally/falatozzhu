import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, InputValue } from '../components/Input';
import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';
import { validateInput } from '../utils/validateInput';
import { numberInput } from '../utils/numberInput';

export const CreateScreen = () => {
  const [name, setName] = useState<InputValue>('');
  const [description, setDescription] = useState<InputValue>('');
  const [quantity, setQuantity] = useState<InputValue>('');
  const { create } = useDb();
  const navigation = useNavigation();
  
  const createItem = () => {
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

    create({ name: String(name), description: String(description), quantity: Number(quantity) })
    navigation.navigate('List' as never);
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
      
      <Button title="Mentés" onPress={createItem} />
      
    </Layout>
  );
}
