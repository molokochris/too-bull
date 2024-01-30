import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/navigation/Main";
import AppStack from "./src/navigation/AppStack";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        translucent={false}
        // backgroundColor={"rgba(128,0,128,.8)"}
      />
      <AppStack />
      {/* </View> */}
    </NavigationContainer>
  );
}
