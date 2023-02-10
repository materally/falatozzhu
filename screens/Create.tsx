import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';
import { useCreateEdit } from '../hooks/useCreateEdit';

export const CreateScreen = () => {
  const { name, setName, description, setDescription, quantity, setQuantity, validated, renderInputs } = useCreateEdit({});

  const { create } = useDb();
  const navigation = useNavigation();
  
  const createItem = () => {
    if(validated()){
      create({ name: String(name), description: String(description), quantity: Number(quantity) })

      setName('');
      setDescription('');
      setQuantity('');
      
      navigation.navigate('List' as never);
    }
  }

  return (
    <Layout>
      { renderInputs() }

      <Button title="Mentés" onPress={createItem} />
    </Layout>
  );
}
