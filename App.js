import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Amplify, { Auth } from 'aws-amplify';
// import amplify from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react-native';
// Amplify.configure(amplify);

import AuthContext from './context/AuthContext';

import StatusBar from './components/StatusBar';
import Login from './components/Login';
import Register from './components/Register';
import Playground from './components/Playground';
import Flex from './components/Flex';
import IssueList from './components/IssueList';
import Camera from './components/Camera';
import Location from './components/Location';
import Form from './components/Form';
import Review from './components/Review';

const Stack = createStackNavigator();

function App() {
  const [token, setToken] = useState('1234');

  const handleAuth = () => {
    setToken('1234');
  };

  return (
    <AuthContext.Provider value={{ token, handleAuth }}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {token === null ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={IssueList} />
              <Stack.Screen name="Camera" component={Camera} />
              <Stack.Screen name="Location" component={Location} />
              <Stack.Screen name="Form" component={Form} />
              <Stack.Screen name="Review" component={Review} />
              <Stack.Screen name="Playground" component={Playground} />
              <Stack.Screen name="Flex" component={Flex} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
