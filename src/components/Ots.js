import { View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable, TextInput}  from 'react-native';
import React from 'react';
import OTPTextInput from 'react-native-otp-textinput';


export default function OTP({navigation}) {
  return (
     <View style={styles.box1}>
        <View style={styles.box2}>

        </View>

        <View style={styles.container1}>
  
        <Text style={styles.title1}>OTP Verification</Text>

        <Text style={styles.description}>Enter the verification code we just sent to your number +94 *******53.</Text>
        </View>
        <View style={styles.inputBox2}>
         <Pressable style={styles.signin} onPress={()=>navigation.navigate("Home")} ><Text style={styles.signin1}>Verify</Text></Pressable>
        </View>

        <View style={styles.inputBox1}>

          <OTPTextInput
            textInputStyle={{
              borderColor:'#fff',
              borderWidth:1,
              borderRadius:11,
              backgroundColor:'rgba(217, 217, 217, 0.2)'
            }}
            inputCount={6}
            tintColor={'rgba(33, 135, 209, 1)'}
            offTintColor={'rgba(0, 0, 0, 0.1)'}
          />
        </View>
            
        <View style={styles.inputBox3}>

         <Text style={styles.codedes}>Didn’t receive code? </Text>

          <Pressable style={styles.signup} onPress={()=> navigation.navigate("signup")}><Text style={styles.resend1} >Resend</Text></Pressable>

       </View>
      
        <View style={styles.box3}>

        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
box1:{
    backgroundColor:'#fff',
    width:'100%',
    height:1000
},
box2:{
    width: '100%',
    height: 100,
    position:'absolute',
    top:20,
    backgroundColor:'rgba(191, 222, 203, 1)',
    borderBottomEndRadius:10,
    borderBottomLeftRadius:10,
    zIndex:10,
},

box3:{
  width: '100%',
  height: 100,
  position:'absolute',
  top:690,
  backgroundColor:'rgba(191, 222, 203, 1)',
  borderTopEndRadius:10,
  borderTopLeftRadius:10,
  zIndex:10,
},

container1: {
    position:'absolute',
    top:120,
    zIndex:10,
    
},
title1:{
  fontSize:36,
  width:350,
  marginLeft:37,
  marginBottom:5,
  color:'#000',
  fontWeight: 'bold'

},
description:{
  marginLeft:37,
  marginBottom:15,
  color:'rgba(128, 128, 127, 1)',
  width:330,

},
inputBox2:{
    color:'#fff',
    position:'absolute',
    top:525
},
signin:{
  marginTop:40,
  marginLeft:70,
  width:250,
  padding:20,
  height:63,
  backgroundColor:'#rgba(0, 68, 167, 1)',
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
inputBox1:{
  backgroundColor:'#fff',
  width:'100%',
  height:100,
  top:250
},

inputBox3:{
  position:'absolute',
  top:328,
  left:100

},
codedes:{
  color:'#000'

},
resend1:{ 
  color:'rgba(33, 135, 209, 1)',
  position:'absolute',
  fontSize:14,
  left:135,
  top:-19,
  fontWeight: 'bold'
},

});