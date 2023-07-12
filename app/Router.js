import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import {
  FirstScreen,
  MapScreen,
  SearchScreen,
  SecondScreen,
  UnitScreen,
} from "./screens";

const MainStack = createStackNavigator();
const StackNavigator = createStackNavigator();

const MainTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="FirstStack" component={FirstStack} />
    <Tab.Screen name="SecondStack" component={SecondStack} />
    <Tab.Screen name="UnitStack" component={UnitStack} />
  </Tab.Navigator>
);

const Router = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="MainTab" component={MainTab} />
        <MainStack.Group>
          <MainStack.Screen name="Map" component={MapScreen} />
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const FirstStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="First" component={FirstScreen} />
    </StackNavigator.Navigator>
  );
};

const SecondStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Search" component={SearchScreen} />
      <StackNavigator.Screen name="Second" component={SecondScreen} />
    </StackNavigator.Navigator>
  );
};

const UnitStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Unit" component={UnitScreen} />
    </StackNavigator.Navigator>
  );
};
export default Router;
