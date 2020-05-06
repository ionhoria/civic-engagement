import React, { useState, useContext } from 'react';
import { View, Button, StyleSheet, TextInput, Text } from 'react-native';
import AuthContext from '../context/AuthContext';

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

export default Register = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { token, handleAuth } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput
        style={styles.textInput}
        placeholder="Parolă"
        secureTextEntry
      />
      <TextInput style={styles.textInput} placeholder="Nume" />
      <TextInput style={styles.textInput} placeholder="Prenume" />
      <TextInput style={styles.textInput} placeholder="Adresă" />
      <TextInput style={styles.textInput} placeholder="Telefon" />
      <Button
        title="Înregistrare"
        title={isLoading ? 'Se încarcă...' : 'Înregistrare'}
        disabled={isLoading}
        onPress={handleAuth}
        color="black"
      />
      <Text style={{ marginTop: 25, marginBottom: 5 }}>Ai cont deja?</Text>
      <Button
        title="Întră în cont"
        onPress={() => navigation.navigate('Login')}
        color="black"
      />
    </View>
  );
};
