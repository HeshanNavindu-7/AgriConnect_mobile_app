import React from 'react';
import { View, StyleSheet, ImageBackground, Button, Text, Linking } from 'react-native';

const Prediction1 = () => {
  const openGooglePage = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <ImageBackground
      source={require('./img/4vI4.gif')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text1}>🌱 Harness the Power of AI for a Bountiful Harvest 🌱

Are you ready to transform your farming experience like never before? Say hello to the future of agriculture with AgriConnect, the ultimate all-in-one agricultural app that combines cutting-edge AI technology with a passion for sustainable farming.</Text>
        <Text style={styles.text1}>📈 AI-Powered Crop Predictions</Text>
        <Button style={styles.predictionn} title="Open Predictionn" onPress={openGooglePage} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  predictionn: {
    backgroundColor: '#1D9375', // Change the button color here
    top: -120,
  },
  text1: {
    color: '#000',
    margin: 18,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Remove the extra 'a' here
    top: -70,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Prediction1;
