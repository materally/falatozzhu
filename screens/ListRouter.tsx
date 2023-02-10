
import { createStackNavigator } from '@react-navigation/stack';
import { Item } from '../hooks/model';
import { ListScreen, EditScreen } from './';

export type ListStackParamList = {
  ListScreen: undefined;
  Edit: { item: Item };
}

const ListStack = createStackNavigator<ListStackParamList>();

export const ListRouter = () => {
 
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="ListScreen" component={ListScreen} />
      <ListStack.Screen name="Edit" component={EditScreen}  />
    </ListStack.Navigator>
  );  
}
