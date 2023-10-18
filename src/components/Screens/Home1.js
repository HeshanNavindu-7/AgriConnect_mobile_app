import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = { uri: 'https://pixabay.com/photos/barley-field-wheat-agriculture-plow-1684052/' };

const Home1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <ImageBackground source={require('./img/s3.png') } resizeMode="cover" style={styles.image}>
          <Text style={styles.tpcard}>The Art and Science of Agriculture</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Booking")}>
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <Text style={styles.title}>Services</Text>
      <View style={styles.rowContainer1}>
        <TouchableOpacity style={styles.card2} >
         
         
          <Text style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2} >
        
       
          <Text style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2} >
          
          <Text style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{
          color: '#000',
          fontSize: 18,
          marginTop: 15,
          marginLeft: 15,
        }}> Featured Products</Text>
        <View style={styles.McardList}>
          <View style={styles.Mcard}>
            <TouchableOpacity style={styles.card1}>
              <Image source={{ uri: 'https://cdn.britannica.com/16/126416-004-26319BEE/Caraway-seeds.jpg?w=300' }}
                style={{ width: 170, height: 130, borderRadius: 12 }} />
              <Text style={styles.cardtext1}>caraway seeds</Text>
              <View style={styles.priceAndCart}>
                <Text style={styles.price}>$20.99</Text>
                <Button title="Add Cart" onPress={() => alert('Added to Cart')} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.Mcard}>
            <TouchableOpacity style={styles.card1}>
              <Image source={{ uri: 'https://cdn.britannica.com/16/126416-004-26319BEE/Caraway-seeds.jpg?w=300' }}
                style={{ width: 170, height: 130, borderRadius: 12 }} />
              <Text style={styles.cardtext1}>caraway seeds</Text>
              <View style={styles.priceAndCart}>
                <Text style={styles.price}>$20.99</Text>
                <Button title="Add Cart" onPress={() => alert('Added to Cart')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  rowContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    padding: 10,
    marginLeft: 15,
  },
  card1: {
  
    left:0,
 
  },
  card2: {
    height: 80,
    width: 110,
  
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderColor: '#000',
    borderRadius: 12,
    marginLeft: 20,
  },
  cardtext1: {
    textAlign: 'center',
    color: '#000',
   
  },
  priceAndCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  McardList: {
    margin: 16,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly', // Space between cards
    flexWrap: 'wrap',
  },
  Mcard: {
    height: 200,
    width: 170,
    borderRadius: 12,
    borderColor: '#000',
    borderWidth: 0.5,
  },
  cardtext1: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  Msec1: {},
  Msbtn: {
    alignItems: 'flex-end',
    backgroundColor: '#1D9375',
    paddingRight: 30,
    height: 40,
    width: 'auto',
  },
  Msearch: {
    padding: 10,
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 1,
    borderRadius:10,
   
    
  },
  tpcard: {
    padding: 25,
    color: '#000',
    fontSize: 25,
  },
  button: {
    backgroundColor: '#1D9375',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Home1;