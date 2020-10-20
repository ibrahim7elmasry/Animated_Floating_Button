 
import React from 'react';
import {
  SafeAreaView,
   View,
  Image,
  Dimensions 
 } from 'react-native';
import FloatingButton from './Components/FloatingButton';
 
  const {height ,width} = Dimensions.get('window');
 
 
const App: () => React$Node = () => {
  return (
   
       <SafeAreaView>
          <View style={{flex:1, alignItems:'center'}}>
            <Image source={require('./assets/Images/map.jpg')} resizeMode='cover' style={{ height: height, opacity:0.5}} />
            <FloatingButton style={{top: height-150}}/>
          </View>
           
       </SafeAreaView>
     
  );
};
 

export default App;
