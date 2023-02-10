import React from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { CreateScreen, ListScreen } from "../screens";
import { ListIcon, CreateIcon } from "../ui/icons";

interface Route {
  name: string;
  component: React.ComponentType,
  options?: BottomTabNavigationOptions
}

type Routes = Array<Route>;

const commonOptions = {};

export const useRoutes = (): Routes => {

  return [
    {
      name: 'List',
      component: ListScreen,
      options: { 
        ...commonOptions,
        tabBarIcon: ({ focused }) => <ListIcon name={focused ? 'list' : 'list-outline'} size={24} />
      }
    },
    {
      name: 'Create',
      component: CreateScreen,
      options: { 
        ...commonOptions,
        tabBarIcon: ({ focused }) => <CreateIcon name={focused ? 'create' : 'create-outline'} size={24} />
      }
    }
  ]
}
