import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, PatientScreen } from "./screens";

export type StackParamList = {
    Home: undefined;
    Patient: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                  headerTintColor: "#2a86ff",
                  headerTitleStyle: {
                      fontWeight: "bold",
                  },
              }}
          >
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: "Patients" }}
              />
              <Stack.Screen name="Patient" component={PatientScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}