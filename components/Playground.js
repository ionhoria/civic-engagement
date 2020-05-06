import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import SimpleSectionList from "./SimpleSectionList";

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 10,
    height: 40,
    width: "100%",
    borderColor: "lightblue",
    borderWidth: 1,
    textAlign: "center",
  },
});

export default Playground = ({ navigation }) => {
  const [text, setText] = useState("default");

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button
        title="Go to Flex"
        onPress={() => navigation.navigate("Flex", { name: "Julius" })}
      />
      <View style={{ padding: 10, alignItems: "center" }}>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={{ width: 150, height: 150 }}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          placeholder="Type some text in here"
          defaultValue={text}
        />
        <Text>Echo: {text}</Text>
      </View>
      <SimpleSectionList />
    </View>
  );
};
