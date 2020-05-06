import React from 'react';
import {
  SectionList,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

export default SimpleSectionList = ({ sections }) => {
  return (
    <SectionList
      style={{ backgroundColor: 'white' }}
      sections={sections}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            marginVertical: 5,
            padding: 10,
          }}
          delayPressIn={50}
          onPress={() => alert(`Touched ${item}`)}
        >
          <Text>{item}</Text>
          <Image style={{ marginVertical: 10 }} source={logo} />
        </TouchableOpacity>
      )}
      renderSectionHeader={(header) => {
        return (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            {header.section.title}
          </Text>
        );
      }}
      keyExtractor={(item, index) => {
        return item;
      }}
    />
  );
};
