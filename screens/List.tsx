import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import { Card } from '../components/Card';
import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';
import { randomId } from '../utils/randomId';

export const ListScreen = () => {
  const { items, getItems } = useDb();
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused) getItems();
  }, [isFocused])

  return (
    <Layout>
      <FlatList 
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={items}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id || randomId()}
      />
    </Layout>
  );
}
