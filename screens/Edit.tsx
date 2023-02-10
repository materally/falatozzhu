import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';
import { useCreateEdit } from '../hooks/useCreateEdit';

export const EditScreen = (props: any) => {
  const item = props.route.params.item;
  const { name, description, quantity, validated, renderInputs } = useCreateEdit({ item });

  const { update } = useDb();
  const navigation = useNavigation();
  
  const updateItem = () => {
    if(validated()) {
      update({ id: item.id, name: String(name), description: String(description), quantity: Number(quantity) })
      navigation.goBack();
    }
  }

  return (
    <Layout>
      { renderInputs() }

      <Button title="Módosítások mentése" onPress={updateItem} />
    </Layout>
  );
}
