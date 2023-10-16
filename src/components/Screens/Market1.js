import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Image, Button } from 'react-native';

const Market1 = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.Msec1}>
      <View style={styles.inputBox1}>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderBottomColor: '#000',
            borderWidth: 0.5,
            marginLeft: 20,
            marginRight: 10,
          }}
          placeholder="Search"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <View>
          <Pressable style={styles.Msbtn}>
            <Text style={styles.Msearch}>Search</Text>
          </Pressable>
        </View>
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

export default Market1;

const styles = StyleSheet.create({
  cardtext1: {
    fontSize: 14,
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
  cardtext1: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
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
  inputBox1: {
    flexDirection: 'row', // Place children in a row
    borderRadius: 12,
    width: '100%',
    height: 40,
    marginTop: 10,
    alignItems: 'flex-end',
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
});