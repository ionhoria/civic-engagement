import React, { useState, useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";

export default Flex = ({ navigation, route }) => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(0)} title="Reset count" />
      ),
    });
  }, [navigation, setCount]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 24 }}>Count: {count}</Text>
      <Button title="Inc count" onPress={() => setCount(count + 1)} />
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "orange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};
