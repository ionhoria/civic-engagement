import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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

export default Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, handleAuth } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Parolă"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Autentificare"
        color="black"
        // disabled={!username || !password}
        onPress={handleAuth}
      />
      <Text style={{ marginTop: 25, marginBottom: 5 }}>
        Nu ai un cont încă?
      </Text>
      <Button
        title="Creează cont"
        color="black"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};
