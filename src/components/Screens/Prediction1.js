import React from 'react';
import { View, StyleSheet, Button, Text, Linking } from 'react-native';

const Prediction1 = () => {
  const openGooglePage = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <View style={styles.container}>
      <Text>Your Prediction1 Content Goes Here</Text>
      <Button title="Open Google" onPress={openGooglePage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Prediction1;
