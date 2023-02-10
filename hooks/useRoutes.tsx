import React from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { DummyScreen } from "../screens";

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
      name: 'Read',
      component: DummyScreen,
      options: { 
        ...commonOptions,
        tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'list' : 'list-outline'} size={24} />
      }
    },
    {
      name: 'Create',
      component: DummyScreen,
      options: { 
        ...commonOptions,
        tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'create' : 'create-outline'} size={24} />
      }
    }
  ]
}