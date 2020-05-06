import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import * as Location from 'expo-location';
import Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';

export default function LocationWrapper({ route, navigation }) {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Issue"
          description="Something is wrong here"
        />
      </MapView>
      <Text style={{ textAlign: 'center' }}>
        Coordonate GPS: {region.latitude}, {region.longitude}
      </Text>
      <View style={{ marginTop: 20, padding: 10 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Stradă"
          onChangeText={setStreet}
          value={street}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Număr"
          onChangeText={setNumber}
          value={number}
        />
        <Button
          title="Continuare"
          color="black"
          onPress={() =>
            navigation.navigate('Form', {
              ...route.params,
              region: { ...region, street, number },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
