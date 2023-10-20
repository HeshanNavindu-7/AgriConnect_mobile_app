import { View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable, TextInput}  from 'react-native';
import React from 'react';
import OTPTextInput from 'react-native-otp-textinput';


export default function OTP({navigation}) {
  return (
     <View style={styles.box1}>
          <ImageBackground source={require('./images/s3.png') } resizeMode="cover" style={styles.imagebg}></ImageBackground>
      
        <View style={styles.container1}>
  
        <Text style={styles.title1}>OTP Verification</Text>

        <View style={styles.inputBox4}>
        <Text style={styles.description}>Enter the verification code we just sent to your number +94 *******53.</Text>
<TextInput placeholder='Phone number' placeholderTextColor='#fff'  style={styles.frmg}></TextInput>


</View>
<View style={styles.btnsend}>
         <Pressable style={styles.signin} ><Text style={styles.signin1}>Send OTP</Text></Pressable>
        </View>
       
        <Text style={styles.description1}>Enter the OTP Code</Text>
        <View style={styles.inputBox1}>

<OTPTextInput
  textInputStyle={{
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    backgroundColor:'#rgba(40, 38, 53, 0.66)'
  }}
  inputCount={4}
  
  tintColor={'rgba(33, 135, 209, 1)'}
  offTintColor={'rgba(0, 0, 0, 0.1)'}
/>
</View>
        </View>
      
        <View style={styles.inputBox3}>

         <Text style={styles.codedes}>Didn’t receive code? </Text>

          <Pressable style={styles.signup} ><Text style={styles.resend1} >Resend</Text></Pressable>

       </View>
      
       <View style={styles.inputBox}>
         <Pressable style={styles.signin} onPress={()=>navigation.navigate("Tab")} ><Text style={styles.signin1}>Verify</Text></Pressable>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
box1:{
    backgroundColor:'#000',
    width:'100%',
    height:1000
},inputBox:{
  color:'#fff',
  position:'absolute',
  top:470,
  backgroundColor:'#1D9375',
} ,
btnsend:{
  color:'#fff',
  position:'absolute',
  top:140
} ,
 frmg:{
  fontSize:16,
  backgroundColor:'#rgba(40, 38, 53, 0.66)',
  height:57,
  marginTop:4,
  padding:10,
  width:344,
  marginLeft:20,
  borderRadius:10,
  borderStyle:'solid',
  borderWidth:1,
  borderColor:'#fff',
  color:'#fff'
  
  
  

},
imagebg: {
  flex:1,
  justifyContent: 'center',
},inputBox4:{

  backgroundColor:'#000',
  padding:10,
  width:412,
  height:800,
  borderRadius:1000, 
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
inputBox4:{

  backgroundColor:'rgba(255, 255, 255, 0.02)',
  padding:10,
  width:412,
  
  borderRadius:1000, 
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
  fontSize:28,
  width:350,
  textAlign:'center',
  marginLeft:37,
  top:-35,
  color:'#000',
  fontWeight: 'bold'

},
description:{
  marginLeft:37,
  marginBottom:15,
  color:'#000',
  width:330,

},description1:{
  marginLeft:37,
  marginBottom:15,
  color:'#000',
  top:120,
},
inputBox2:{
    color:'#fff',
    position:'absolute',
    top:300,
},
signin1:{
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
signin:{
  marginTop:40,
  marginLeft:70,
  width:250,
  padding:20,
  height:63,
  backgroundColor:'#1D9375',
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

  marginHorizontal:62,
  top:120,
  
},

inputBox3:{
  position:'absolute',
  top:378,
  left:100

},
codedes:{
  color:'#000',
  fontSize:13,
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