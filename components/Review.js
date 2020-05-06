import React from 'react';
import {
  Image,
  View,
  Dimensions,
  Button,
  Text,
  StyleSheet,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Review({ route, navigation }) {
  console.log(route.params);
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            width: Dimensions.get('window').width / 2,
            height: Dimensions.get('window').width / 2,
          }}
          source={{
            uri: route.params.photo.uri,
          }}
        />
        <MapView
          style={{
            width: Dimensions.get('window').width / 2,
            height: Dimensions.get('window').width / 2,
          }}
          region={route.params.region}
          rotateEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          zoomEnabled={false}
        >
          <Marker
            coordinate={{
              latitude: route.params.region.latitude,
              longitude: route.params.region.longitude,
            }}
            title="Sesizare #1234"
            description="O problemă a fost raportată aici"
          />
        </MapView>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={[styles.text, { marginTop: 20 }]}>
          Stradă: {route.params.region.street}
        </Text>
        <Text style={styles.text}>Număr: {route.params.region.number}</Text>
        <Text style={styles.text}>Subiect: {route.params.subject}</Text>
        <Text style={styles.text}>Descriere: {route.params.description}</Text>
        <Text style={[styles.text, { marginBottom: 20 }]}>
          Autoritate: {route.params.authority}
        </Text>
        <Button
          title="Trimite sesizare"
          color="black"
          onPress={() => navigation.navigate('Home')}
          // style={{ marginTop: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
