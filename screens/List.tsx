import React, { useEffect } from 'react';
import { Alert, FlatList, RefreshControl, Text } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Card } from '../components/Card';
import { useDb } from '../hooks/useDb';
import Layout from '../ui/Layout';
import { randomId } from '../utils/randomId';
import { Item } from '../hooks/model';
import { ListStackParamList } from './ListRouter';

export const ListScreen = () => {
  const { items, getItems, remove } = useDb();
  const isFocused = useIsFocused();
  const navigation = useNavigation<StackNavigationProp<ListStackParamList>>();

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

  const handleOnEdit = (item: Item) => {
    return navigation.navigate('Edit', { item });
  }

  return (
    <Layout>
      <FlatList 
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={items}
        renderItem={({ item }) => <Card item={item} onRemove={removeItem} onEdit={handleOnEdit} />}
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
