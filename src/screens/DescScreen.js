

import * as React from 'react';
import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { NavigationHelpersContext } from '@react-navigation/core';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const DescScreen = ({navigation,route}) => {
    return (
        <View style={{ flex: 1,backgroundColor:'white'
         }}>
          <View style={styles.upperSection}>
            <Animatable.Image 
              animation="fadeIn"
               style={{alignSelf:'center',height:'100%',width:'100%'}}
              source={route.params.data.photo}
              />
          </View>
          <Animatable.View 
            animation="fadeInUp"
            style={styles.lowerSection}>
            <View style={{width:'80%',alignSelf:'center',marginTop:15}}>
              <Text style={styles.intro}>{route.params.data.name}</Text>
            </View> 
            <View style={{width:'80%',alignSelf:'center'}}>
              <Text style={[styles.intro,{fontSize:20}]}>{route.params.data.location}</Text>
            </View> 
            <View style={{width:'80%',alignSelf:'center',marginTop:15}}>
              <Text style={[styles.intro,{fontSize:20}]}>{route.params.data.desc}</Text>
            </View> 
            
          </Animatable.View>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.btnView} >
            <Animatable.View
              animation="fadeInRight"  
             style={[styles.btn,{position:'absolute',bottom:0,marginTop:20}]}>
              <Text style={styles.getStart}>Explore More</Text>
            
            </Animatable.View>
            </TouchableOpacity>
        </View>
      );
}



const styles = StyleSheet.create({
  upperSection:{
    flex:1,
    justifyContent:'center',
  },
  lowerSection :{
    flex:1,
    bottom:20,
    backgroundColor:'white',
    borderTopEndRadius:20,
    borderTopStartRadius:20
  },
  intro :{
    fontSize:28,
    fontWeight:'700',
    color:'black',
    // fontFamily:'AndikaNewBasic-Bold'
  },
  btn: {
    backgroundColor:'#2196f3',
    height:50,
    width:150,
    justifyContent:'center',
    marginRight:10,
    alignSelf:'flex-end',
    borderRadius:10,
    
  },
  btnView: {
    position:'absolute',
    height:50,
    width:150,
    justifyContent:'center',
    marginRight:10,
    alignSelf:'flex-end',
    borderRadius:10,
    bottom:20,
    right:10
    
  },
  getStart :{
    fontSize:22,
    fontWeight:'700',
    color:'white',
    textAlign:'center'
  }

})



export default DescScreen;