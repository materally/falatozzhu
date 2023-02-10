import React from 'react';
import { Text } from 'react-native';

import Layout from '../ui/Layout';

export const EditScreen = (props: any) => {
  const item = props.route.params.item;

  return (
    <Layout>
     <Text>{item.name}</Text>
    </Layout>
  );
}
