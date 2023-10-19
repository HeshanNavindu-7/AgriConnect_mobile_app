import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile1 = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    location: 'City, Country',
  };

  return (
    <View style={styles.container}>
      {/* Header Image */}
      <Image source={require('./img/man.jpg')}
                style={{ width: 250, height: 150, borderRadius: 12,marginTop:20 }} />
      {/* User Info */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.age}>Age: {user.age}</Text>
        <Text style={styles.location}>Location: {user.location}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cards</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  profileInfo: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: '80%',
    margin: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
  },
  actionButtons: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    width:200,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Profile1;
