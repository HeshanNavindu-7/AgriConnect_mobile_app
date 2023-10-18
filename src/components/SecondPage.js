import { View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable, TextInput}  from 'react-native';
import React from 'react';


export default function SecondPage({navigation}) {
  return (
     <View style={styles.box1}>
        <ImageBackground source={require('./images/SecondPagebg.png') } resizeMode="cover" style={styles.imagebg}></ImageBackground>

        <View style={styles.container1}>
  
        <Text style={styles.title1}>Empowering Fields, Enhancing Yields</Text>

        <Text style={styles.description}>“AgriConnect” seamlessly connects farmers with crucial resources, weather updates, market trends, and a supportive community to optimize crop yields and agricultural success.</Text>

        </View>
        <View style={styles.inputBox2}>

         <Pressable style={styles.signin} onPress={()=>navigation.navigate("signup")} ><Text style={styles.signin2}>Sign Up</Text></Pressable>
         <Pressable style={styles.signup} onPress={()=>navigation.navigate("signin")} ><Text style={styles.signin1}>Sign In</Text></Pressable>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
box1:{
    backgroundColor:'#000',
    width:'110%',
    height:844

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
    width:350,
    marginLeft:37,
    marginTop:165,
    color:'#000',
    fontWeight: 'bold'

},
description:{
    fontSize:16,
    width:319,
    marginLeft:37,
    marginTop:15,
    color:'#000',
    fontWeight: 'bold'

},
signin:{
    marginTop:300,
    marginLeft:200,
    width:165,
    padding:20,
    height:63,
   borderColor:'#000',
   borderWidth:2,
    borderRadius:15,
    position:'absolute',
    zIndex:100
  },
signup:{
    marginTop:300,
    marginLeft:30,
    width:165,
    padding:20,
    height:63,
    backgroundColor:'#rgba(29,147,117,1)',
    borderRadius:15,
    position:'absolute',
    zIndex:100
  },

  signin1:{
    color:'#fff',
    textAlign:'center',
    fontSize:19,
    marginTop:-4

  },
  signin2:{
    color:'#000',
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