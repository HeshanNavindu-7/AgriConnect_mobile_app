import { View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable, TextInput}  from 'react-native';
import React from 'react';


export default function FirstPage({navigation}) {
  return (
     <View style={styles.box1}>
        <ImageBackground source={require('./images/firstPagebg.png') } resizeMode="cover" style={styles.imagebg}></ImageBackground>

        <View style={styles.container1}>
  
        <Text style={styles.title1}>AgriGrow</Text>

        <Text style={styles.description}>Sowing the Seeds of Sustainability.</Text>

        </View>
        <View style={styles.inputBox2}>

         <Pressable style={styles.signin} onPress={()=>navigation.navigate("SecondPage")} ><Text style={styles.signin1}>Explore</Text></Pressable>

        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
box1:{
    backgroundColor:'#000',
    width:'100%',
    height:1000

  },
imagebg: {
    flex:1,
    justifyContent: 'center',
},
container1: {
    position:'absolute',
    top:250,
    zIndex:10,
    
},
title1:{
    fontSize:36,
    width:250,
    marginLeft:37,
    marginTop:215,
    color:'#000',
    fontWeight: 'bold'

},
description:{
    fontSize:18,
 
    marginLeft:37,
    marginTop:15,
    color:'#000',
    fontWeight: 'bold'

},
signin:{
    marginTop:300,
    marginLeft:120,
    width:165,
    padding:20,
    height:63,
    backgroundColor:'#rgba(0, 68, 167, 1)',
    borderRadius:20,
    position:'absolute',
    zIndex:100
  },

  signin1:{
    color:'#fff',
    textAlign:'center',
    fontSize:19,
    marginTop:-4

  },
  inputBox2:{
    color:'#fff',
    position:'absolute',
    top:350
  },

});