import { View, Text, Button, ImageBackground ,StyleSheet,Image,Pressable, TextInput}  from 'react-native';
import React from 'react';


export default function Signin({navigation}) {
  return (
     <View style={styles.container} >
    
     <ImageBackground source={require('./images/signinbg.png') } resizeMode="cover" style={styles.imagebg}></ImageBackground>

     <View style={styles.container1}>
       
       <Text style={styles.title1}>Sign in</Text>

       <View style={styles.inputBox1}>

        <TextInput placeholder='Email' placeholderTextColor='#fff' style={[styles.frmg,styles.frmgpadd]}></TextInput>
        <TextInput placeholder='Passoword' placeholderTextColor='#fff' secureTextEntry style={styles.frmg}></TextInput>


       </View>
       <View style={styles.inputBox2}>

         <Pressable style={styles.fogpass} ><Text style={styles.fogpass1}>Forgot your password?</Text></Pressable>

         <Pressable style={styles.signin} ><Text style={styles.signin1}>Sign in</Text></Pressable>

       </View>

       <View style={styles.inputBox3}>

         <Pressable style={styles.gosignup} ><Text style={styles.gosignup1}>Don't you have an account
        
         </Text></Pressable>

          <Pressable style={styles.signup} onPress={()=> navigation.navigate("signup")}><Text style={styles.signup1} >Signup</Text></Pressable>

       </View>
    
     </View>

     <View style={styles.btns}>

     <Pressable style={styles.btn1} ><Image style={styles.imgf} source={require('./images/fblogo.svg.png')}></Image><Text style={styles.btn2}>Login with Facebook</Text></Pressable>
     
     <Pressable style={styles.btng1} ><Image style={styles.imgf} source={require('./images/googlelogo.png')}></Image><Text style={styles.btng}>Login with Google</Text></Pressable>

     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btns:{
    position:'absolute',
    top:630,
    zIndex:100,
    left:50,



  },
  imgf:{
    width:40,
    height:40,
    position:'absolute',
    top:5,
    left:10

  },
  btn1:{
    backgroundColor:'rgba(29,147,117,1)',
    padding:10,
    width:312,
    height:49,
    borderRadius:10,
    marginTop:10,
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.4)'


  },
  btng1:{
    backgroundColor:'#fff',
    padding:10,
    width:312,
    height:49,
    borderRadius:10,
    marginTop:10,
    borderWidth:1,
    borderColor: 'rgba(0,0,0,0.4)'


  },
  btn2:{
   color:'#fff',
   textAlign:'center',
   fontSize:14
    

  },
  btng:{
   color:'#fff',
   textAlign:'center',
   fontSize:14,
   color:'#000'
    

  },
  inputBox2:{
    color:'#fff',
    position:'absolute',
    top:280
  },

  fogpass:{
    position:'absolute',
    top:-65,
    left:220,
    width:200


  },
  fogpass1:{
    color:'#2E83EF',
    textDecorationLine:'underline',
    fontSize:12


  },

  inputBox3:{
    position:'absolute',
    top:328,
    left:80

  },
  gosignup1:{
    color:'#000'

  },
  signup:{
    
    position:'absolute',
    fontSize:14,
    left:190,
    top:-20
    
    
    
  },
  signup1:{
    
    color:'#2F89FC',
    marginTop:20
   
    
  },
  signin:{
    marginTop:-18,
    marginLeft:120,
    width:165,
    padding:20,
    height:63,
    backgroundColor:'rgba(29,147,117,1)',
    borderRadius:20,
    position:'absolute',
    zIndex:100,
  },

  signin1:{
    color:'#fff',
    textAlign:'center',
    fontSize:19,
    marginTop:-4

  },

  inputBox1:{
    backgroundColor:282635,
    padding:10,
    width:412,
    height:800,
    borderRadius:600,
    
  },
  frmgpadd:{
    marginTop:60,
  },
  frmg:{
    fontSize:16,
    backgroundColor:'rgba(40, 38, 53, 0.5)',
    height:57,
    marginTop:30,
    padding:10,
    width:344,
    marginLeft:20,
    borderRadius:10,
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'#fff',
    color:'#fff'
    

  },
  container1: {
    position:'absolute',
    top:250,
    zIndex:10,
    
  },
  title1:{
    fontSize:46,
    width:250,
    marginLeft:37,
    marginTop:-85,
    color:'#fff',
    fontWeight: 'bold'

  },
  title2:{
    fontSize:13,
    width:360,
    letterSpacing:1,
    marginLeft:37,
    marginTop:30,
    
    color:'#fff'

  },

  box2:{
    backgroundColor:'#0044A7',
    padding:15,
    margin:10,
    textAlign:'center',
    borderRadius:43,
    width:165, 

  },
  box2txt:{
    textAlign:'center',
    marginLeft:-10,
    fontSize:19,
    color:'#fff'

  },
  box3:{
    marginTop:10,
    position:'absolute',
    left:20,
    zIndex:1000

  },
  box:{
    position:'relative',
    width:165,
    top:50,
    zIndex:1000,
    height:1000,
    left:120,
    backgroundColor:'#000'



  },
  background:{
    position:'absolute',
    width:'100%',
    height:500,
    top:300
  },

  imagebg: {
    flex:1,
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  
});