import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image } from 'react-native';
import { Audio } from "expo-av";

const listBackgroundColors = {
  1:"#3498DB",
  2:"#E8290B",
  3:"#AE1438",
  4:"#2475B0",
  5:"#30336B",
  6:"#0A3D62",
  7:"#26ae60",
  8:"#10A881",
  9:"#218F76",
  10:"#DFAF2B"
}
const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),

  
}


export default class App extends React.Component {
playSound = async number => {
 const soundObject = new Audio.Sound();
 try {
   let path = soundList[number]
   await soundObject.loadAsync(path)
   await soundObject
   .playAsync()
   .then( async playbackStatus =>{
     setTimeout(() => {
        soundObject.unloadAsync();
     }  ,playbackStatus.playableDurationMillis);

   } )
   .catch(error => {
    console.log(error);
    
   })

 } catch (error){
 console.log(error);   
}
};
  render() {
  return (
    <View style={styles.container}>
    <View style={styles.gridcontainer}>
    <Image style={styles.logo}
    source={require("./assets/logo.png")}
    />
    <View style={styles.rowContainer}>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[1]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("one")
   }}
    >
    
    <Text style={styles.ItemText}>One</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[2]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("two")
   }}
    >
    
    <Text style={styles.ItemText}>Two</Text>
</TouchableOpacity>
    </View>
    <View style={styles.rowContainer}>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[3]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("three")
   }}
    >
    
    <Text style={styles.ItemText}>Three</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[4]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("four")
   }}
    >
    
    <Text style={styles.ItemText}>Four</Text>
</TouchableOpacity>
    </View>
    <View style={styles.rowContainer}>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[5]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("five")
   }}
    >
    
    <Text style={styles.ItemText}>Five</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[6]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("six")
   }}
    >
    
    <Text style={styles.ItemText}>Six</Text>
</TouchableOpacity>
    </View>
    <View style={styles.rowContainer}>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[7]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("seven")
   }}
    >
    
    <Text style={styles.ItemText}>Seven</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[8]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("eight")
   }}
    >
    
    <Text style={styles.ItemText}>Eight</Text>
</TouchableOpacity>
    </View>
    <View style={styles.rowContainer}>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[9]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("nine")
   }}
    >
    
    <Text style={styles.ItemText}>Nine</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[{backgroundColor:listBackgroundColors[10]}
   ,styles.Item
   ]}
   onPress={() =>{
  this.playSound("ten")
   }}
    >
    
    <Text style={styles.ItemText}>Ten</Text>
</TouchableOpacity>
    </View>
    
    
    </View>
    </View>
  );
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  gridcontainer:{
flex:1,
margin:5
  },
  logo:{
    alignSelf:"center",
    marginTop:15
  },
  rowContainer:{
    flexDirection:"row"
  },
  Item:{
    flex:1,
    height:110,
    justifyContent:"center",
    alignItems:"center"
  },
  ItemText:{
    color:"#FFF",
    fontSize:20
  }
});
