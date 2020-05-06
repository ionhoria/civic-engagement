import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { Camera } from 'expo-camera';

export default function CameraView({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const camera = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleClick = async () => {
    const photo = await camera.current.takePictureAsync();
    navigation.navigate('Location', { photo });
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={camera}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width,
        }}
        type={Camera.Constants.Type.back}
        ratio={'1:1'}
      />
      <View
        style={{
          flex: 1,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ textAlign: 'center' }}>
          Apasă butonul de mai jos pentru a captura o imagine relevanta pentru
          problema raportată.
        </Text>
        <TouchableOpacity onPress={handleClick} style={{ marginTop: 20 }}>
          <Icon reverse name="camera" size={42} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
