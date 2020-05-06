import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Form = ({ route, navigation }) => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [authority, setAuthority] = useState('Politia Locala Sector 6');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Subiect"
        onChangeText={setSubject}
        value={subject}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Descriere"
        onChangeText={setDescription}
        value={description}
      />
      <Picker
        style={styles.textInput}
        selectedValue={authority}
        onValueChange={(value, index) => {
          if (index !== 0) {
            setAuthority(value);
          }
        }}
      >
        <Picker.Item label="Garda de Mediu" value="Garda de Mediu" />
        <Picker.Item
          label="Politia Locala Sector 6"
          value="Politia Locala Sector 6"
        />
        <Picker.Item
          label="Agentia Nationala pentru Protectia Consumatorului"
          value="Agentia Nationala pentru Protectia Consumatorului"
        />
      </Picker>
      <Button
        title="Continuare"
        color="black"
        onPress={() =>
          navigation.navigate('Review', {
            ...route.params,
            subject,
            description,
            authority,
          })
        }
      />
    </View>
  );
};
