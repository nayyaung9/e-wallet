import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/home/HomeScreen";
import AddNewCardScreen from "./screens/card/AddNewCard";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomePageScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddNewCard"
        component={AddNewCardScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : "";

  if (routeName === "AddNewCard") {
    return false;
  }

  return true;
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>This is SettingsScreen</Text>
    </View>
  );
};

const AccountScreen = () => {
  return (
    <View>
      <Text>This is AccountScreen</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "md-people-sharp" : "md-people-outline";
            } else if (route.name === "Account") {
              iconName = focused ? "md-people-sharp" : "md-people-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#25509d",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePageScreen}
          options={({ route }) => ({
            tabBarVisible: getTabBarVisibility(route),
          })}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
