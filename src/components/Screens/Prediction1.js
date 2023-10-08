import {  View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable, TextInput } from 'react-native'
import React from 'react'

const Prediction1 = () => {
  return (
    <View style={styles.box1} >
    
      <ImageBackground source={require('./Screenimages/predictionbg.png') } resizeMode="cover" style={styles.imagebg}></ImageBackground>
      
      <View style={styles.container1}>
        <Text style={styles.title1}>Welcome to our Crop Recommendation feature</Text>
      </View>

      <View style={styles.container2}>  
        <Text style={styles.description}>Get personalized crop recommendations based on your location, soil, and climate. Farm smarter with data-driven choices for a bountiful harvest</Text>
      </View>

      <View style={styles.textinput}>

      <TextInput  style={[styles.frmg]}></TextInput>
      <TextInput style={[styles.frmg]}></TextInput>
      <TextInput style={[styles.frmg]}></TextInput>
      <TextInput style={[styles.frmg]}></TextInput>
      <TextInput style={[styles.frmg]}></TextInput>



      </View>
      <View >
        <Text style={styles.title2}>Nitrogen :</Text>
      </View>
      <View >
        <Text style={[styles.title2,styles.padding1]}>Phospours :</Text>
      </View>
      <View >
        <Text style={[styles.title2,styles.padding2]}>Potassium :</Text>
      </View>
      <View >
        <Text style={[styles.title2,styles.padding3]}>Average Temprature:</Text>
      </View>
      <View >
        <Text style={[styles.title2,styles.padding4]}>Average Humadity :</Text>
      </View>
      
      <View style={styles.inputBox2}>
         <Pressable style={styles.signin} onPress={()=>navigation.navigate("Tab")} ><Text style={styles.signin1}>Predict</Text></Pressable>
        </View>
    </View>
  )
}

export default Prediction1;
const styles = StyleSheet.create({
  box1:{
    backgroundColor:'#000',
    width:'100%',
    height:700
  },
  
  imagebg: {
    flex:1,
    justifyContent: 'center',
  },
  title1:{
    fontSize:20,
    width:300,
    marginLeft:50,
    marginTop:-180,
    color:'#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description:{
    fontSize:15,
    width:330,
    marginLeft:27,
    marginTop:-45,
    color:'#000',
    textAlign: 'center'
  },
  
  container1: {
    position:'absolute',
    top:250,
    zIndex:10,
},
container2: {
  position:'absolute',
  top:175,
  zIndex:10,
},
textinput:{
  position:'absolute',
  top:225,
  zIndex:10,
},
frmg:{
  fontSize:16,
  backgroundColor:'rgba(255, 255, 255, 1)',
  height:50,
  marginTop:10,
  padding:10,
  width:164,
  marginLeft:180,
  borderRadius:10,
  borderStyle:'solid',
  borderWidth:1,
  borderColor:'rgba(100, 180, 131, 1)',
  color:'#000'
 
},
title2:{
  fontSize:20,
  width:120,
  marginLeft:27,
  marginTop:-455,
  color:'#000',
  fontWeight: 'bold',
  textAlign: 'left'
},
padding1:{
  marginTop:-395
},
padding2:{
  marginTop:-335
},
padding3:{
  marginTop:-290
},
padding4:{
  marginTop:-230
},
inputBox2:{
  color:'#fff',
  position:'absolute',
  top:525
},
signin:{
  marginTop:40,
  marginLeft:55,
  width:275,
  padding:20,
  height:63,
  backgroundColor:'rgba(29, 147, 117, 1)',
  borderRadius:20,
  position:'absolute',
  zIndex:10,
},

signin1:{
  color:'#fff',
  textAlign:'center',
  fontSize:19,
  marginTop:-4

},

})