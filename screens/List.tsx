import React from 'react';
import { FlatList } from 'react-native';
import { Card } from '../components/Card';
import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';


export const ListScreen = () => {
  const { items } = useDb();

  return (
    <Layout>
      <FlatList 
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={items}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
}
