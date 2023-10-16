import React from 'react';
import { View, StyleSheet, ImageBackground, Button, Text, Linking } from 'react-native';

const Prediction1 = () => {
  const openGooglePage = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://example.com/path_to_your_background_image.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text>Get Your Prediction</Text>
        <Button title="Open Prediction" onPress={openGooglePage} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Prediction1;
