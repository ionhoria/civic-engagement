import React, { useState } from 'react';
import {
  SectionList,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Camera } from 'expo-camera';
import { SearchBar, Icon } from 'react-native-elements';
import SimpleSectionList from './SimpleSectionList';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const sections = [
  { title: 'Sesizările mele', data: ['My Issue 1', 'My Issue 2'] },
  {
    title: 'Sesizări urmărite',
    data: ['Followed Issue 1', 'Followed Issue 2'],
  },
  { title: 'Sesizări publice', data: ['Other Issue 1', 'Other Issue 2'] },
];

export default function IssueList({ navigation }) {
  const [search, setSearch] = useState('');

  const clickHandler = () => navigation.navigate('Camera');

  const filteredSectionData = sections.map((section) => ({
    ...section,
    data: section.data.filter((data) => data.includes(search)),
  }));

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
      <SearchBar
        placeholder="Caută..."
        platform="android"
        onChangeText={setSearch}
        value={search}
      />
      <SimpleSectionList sections={filteredSectionData} />
      <TouchableOpacity onPress={clickHandler} style={styles.addButton}>
        <Icon reverse name="add" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    right: 10,
    bottom: 10,
  },
});
