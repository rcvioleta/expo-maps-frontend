import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";

const defaultHeight = Dimensions.get("window");
const Stack = createNativeStackNavigator();

export default function App() {
  const [screenHeight, setScreenHeight] = React.useState(0);

  function onContentSizeChangeHandler(contentWidth, contentHeight) {
    setScreenHeight(contentHeight);
  }

  const scrollEnabled = screenHeight > defaultHeight;

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Header />

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={onContentSizeChangeHandler}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ title: "Home" }}
            />
            <Stack.Screen name="Map" component={Map} />
          </Stack.Navigator>
          <Footer />
        </ScrollView>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
