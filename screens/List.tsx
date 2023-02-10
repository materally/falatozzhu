import React, { useEffect } from 'react';
import { Alert, FlatList, RefreshControl, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import { Card } from '../components/Card';
import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';
import { randomId } from '../utils/randomId';

export const ListScreen = () => {
  const { items, getItems, remove } = useDb();
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused) getItems();
  }, [isFocused])

  const removeItem = (id: string) => {
    Alert.alert('Biztosan?', 'Biztosan törlöd a tételt?', [
      {
        text: 'Nem',
        style: 'cancel',
      },
      {
        text: 'Igen', onPress: () =>  remove(id).then(getItems)
      },
    ]);
  }

  return (
    <Layout>
      <FlatList 
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={items}
        renderItem={({ item }) => <Card item={item} onRemove={removeItem} />}
        keyExtractor={item => item.id || randomId()}
        ListEmptyComponent={<Text>Nincs elem!</Text>}
        refreshControl={<RefreshControl
          refreshing={false}
          onRefresh={getItems}
        />}
      />
    </Layout>
  );
}
