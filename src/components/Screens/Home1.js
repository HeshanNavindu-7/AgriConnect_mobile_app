
import React ,{useContext} from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, TouchableOpacity,Image,ImageBackground,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext';

const image = {uri: 'https://media.istockphoto.com/id/1413584336/photo/astronaut-spacewalk-in-space-and-touching-orb-of-light.webp?b=1&s=170667a&w=0&k=20&c=ougmkUUwziBqoE_bwPecLgQUs4oATwFgAxrLHfRToe0='};

const Home1 = () => {
  const{userInfo,isLoading,logout} = useContext(AuthContext)

  return (
<View style={styles.container}>
      <View style={styles.container1}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Text style={styles.tpcard}>Adventure Begins Here</Text>
         
        <TouchableOpacity style={styles.button}  onPress={logout}>
          <Text style={styles.buttonText}>logout</Text>
        </TouchableOpacity>
        </ImageBackground>

      </View>
     
       <Text style={styles.title}>Services</Text>
       <View style={styles.rowContainer1}>
       <TouchableOpacity style={styles.card1} >
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6b3t6XVKALhGXChbCBsn8eZ3CyraSrKYow&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:20,marginTop:8}} />
          <Text  style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.card1} >
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSYz7e8gX5sjOpGBBrwpDV9OU_JCceucAwg&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:20,marginTop:8}} />
          <Text  style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
       <TouchableOpacity style={styles.card1} >
       <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY6b3t6XVKALhGXChbCBsn8eZ3CyraSrKYow&usqp=CAU'}}
       style={{width: 100, height: 100, borderRadius:12 ,marginLeft:20,marginTop:8}} />
          <Text  style={styles.cardtext1} > The Capsule</Text>
        </TouchableOpacity>
      
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    height:100,
    
    
    
    
  },
  
  rowContainer:{
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  image:{
    
    
    marginTop: 30,
    marginHorizontal:20,
   
    elevation: 2,
  },
  rowContainer1:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    padding:10,
    marginLeft:15,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    margin:25,
    position:'relative'
  },
  card:{
    height:120,
    width:120,
    backgroundColor:'#020011',
    borderWidth:1,
    borderColor:'#000',
    borderRadius: 10,
   padding:10,
   marginLeft:3,
   marginBottom:7,
   marginRight:1,
    elevation: 3,
  },
  card1:{
    height:110,
    width:110,
    backgroundColor:'#fff',
    borderWidth:0.2,
    borderColor:'#000',
    borderRadius: 10,
    marginLeft:20,
  },
  cardtext:{
    textAlign:'center',
    color:'#000',
    justifyContent:'center',
  },
  cardtext1:{
    textAlign:'center',
    color:'#000',
    
    justifyContent:'center',
  },
  card2: {
    backgroundColor: '#201F2E',
   
  },
  tpcard: {
    padding:25,
    color: '#fff',
    fontSize: 25,
  },
  button: {
    backgroundColor: '#0044A7',
    borderRadius: 5,
   
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  topic: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 25,
  },
});
export default Home1 ;