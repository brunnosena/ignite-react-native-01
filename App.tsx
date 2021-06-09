import React from "react";
import { StatusBar, View } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={{ flex: 1, backgroundColor: "#191622" }}>
        <Home />
      </View>
    </>
  );
}
