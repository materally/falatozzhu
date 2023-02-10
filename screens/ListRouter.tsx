
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
      <ListStack.Screen name="ListScreen" component={ListScreen} options={{ headerTitle: 'Lista' }} />
      <ListStack.Screen name="Edit" component={EditScreen} options={{ headerTitle: 'Szerkesztés' }} />
    </ListStack.Navigator>
  );  
}
