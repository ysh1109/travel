

import React,{useState} from 'react';
import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity,TouchableHighlight,FlatList, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialIcon from 'react-native-vector-icons/FontAwesome';
import ProfileScreen from './ProfileScreen';

import {ListContext} from '../contextApi/Listing'
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const RESTAURANTS = [
  {
    id: 'r1',
    name: 'Restaurant one',
    location:"location one, Sydney",
    photo:require('../assets/images/restuarants/r1.jpg'),
    type:'restaurant',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'r2',
    name: 'Restaurant two',
    location:"location two, Sydney",
    type:'restaurant',
    photo:require('../assets/images/restuarants/r2.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'r3',
    name: 'Restaurant three',
    location:"location three, Sydney",
    photo:require('../assets/images/restuarants/r3.jpg'),
    type:'restaurant',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'r4',
    name: 'Restaurant four',
    location:"location four, Sydney",
    type:'restaurant',
    photo:require('../assets/images/restuarants/r4.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'r5',
    name: 'Restaurant five',
    location:"location five, Sydney",
    photo:require('../assets/images/restuarants/r5.jpg'),
    type:'restaurant',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  
];
const OUTING = [
  {
    id: 'o1',
    name: 'Outing one',
    location:"location one, Sydney",
    photo:require('../assets/images/outings/o1.jpg'),
    type:'restaurant',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'o2',
    name: 'Outing two',
    location:"location two, Sydney",
    type:'outing',
    photo:require('../assets/images/outings/o2.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'o3',
    name: 'Outing three',
    location:"location three, Sydney",
    photo:require('../assets/images/outings/o3.jpg'),
    type:'outing',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'o4',
    name: 'Outing four',
    location:"location four, Sydney",
    type:'outing',
    photo:require('../assets/images/outings/o4.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'o5',
    name: 'Outing five',
    location:"location five, Sydney",
    photo:require('../assets/images/outings/o5.jpg'),
    type:'outing',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  
];

const STAY = [
  {
    id: 's1',
    name: 'Stay one',
    location:"location one, Sydney",
    photo:require('../assets/images/stay/s1.jpg'),
    type:'stay',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 's2',
    name: 'Stay two',
    location:"location two, Sydney",
    type:'stay',
    photo:require('../assets/images/stay/s2.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 's3',
    name: 'Stay three',
    location:"location three, Sydney",
    photo:require('../assets/images/stay/s3.jpg'),
    type:'stay',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 's4',
    name: 'Stay four',
    location:"location four, Sydney",
    type:'stay',
    photo:require('../assets/images/stay/s4.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 's5',
    name: 'Stay five',
    location:"location five, Sydney",
    photo:require('../assets/images/stay/s5.jpg'),
    type:'stay',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  
];

const OTHERS = [
  {
    id: 'e1',
    name: 'Others one',
    location:"location one, Sydney",
    photo:require('../assets/images/other/e1.jpg'),
    type:'other',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'e2',
    name: 'other two',
    location:"location two, Sydney",
    type:'other',
    photo:require('../assets/images/other/e2.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'e3',
    name: 'Other three',
    location:"location three, Sydney",
    photo:require('../assets/images/other/e3.jpg'),
    type:'other',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'e4',
    name: 'Other four',
    location:"location four, Sydney",
    type:'other',
    photo:require('../assets/images/other/e4.jpg'),
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  {
    id: 'e5',
    name: 'Other five',
    location:"location five, Sydney",
    photo:require('../assets/images/other/e5.jpg'),
    type:'other',
    desc:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
  },
  
];
const HomeScreen = ({navigation}) => {
    const [username,setUsername] = React.useState('')

    const cont = React.useContext(ListContext);
    React.useEffect(async()=>{
      const value =  await AsyncStorage.getItem('username')
      setUsername(value)
    },[])

    const [list,setList] = useState(RESTAURANTS)
    const [selectedTab,setSelectedTab] = useState('tabOne')
    
    // React.useEffect(async() => {
    //     setList(RESTAURANTS)
    // }, [])

    const addItem = async(item) => {
      const data = [...cont.listing]
      let findItem = await data.findIndex(itm=>item.id==itm.id);
      if(findItem == -1) {
        cont.addList(item)
        ToastAndroid.show("Location Added to Listing", ToastAndroid.LONG);
      }
      else {
        ToastAndroid.show("Location Already in Listing", ToastAndroid.LONG);
      }
    }

    const renderItem =({item}) => (
        <TouchableHighlight underlayColor="lightblue" 
        onPress={()=>navigation.navigate('Desc',{data:item})}
        style={{height:SCREEN_HEIGHT/6,width:SCREEN_WIDTH-40,borderRadius:10,
          elevation:5,marginTop:5,marginBottom:5,
        backgroundColor:'white',alignSelf:'center'}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:0.4,justifyContent:'center',padding:10}}>
               <Image 
                style={{height:'100%',width:'100%'}}
                source={item.photo}
               />
              </View>
              <View style={{flex:0.5,justifyContent:'center'}}>
                  <Text style={{fontSize:22,color:'#091527',fontWeight:'700'}}>{item.name}</Text>
                  <View style={{flexDirection:'row'}}>
                  <Text  style={{fontSize:18,color:'#233753',fontWeight:'700',alignSelf:'center'}}>{item.location}</Text> 
                  </View>
              </View>
              <View style={{flex:0.3,justifyContent:'center'}}>
                  <TouchableOpacity onPress={()=> {addItem(item)}}style={styles.btn}>
                  <MaterialIcon
                    style={{alignSelf: 'center'}}
                    name="plus"
                    color="white"
                    size={20}
                  />
                  </TouchableOpacity>
              </View>
            </View>
        </TouchableHighlight>
    )
  
 
  
    const selectTab = (tabName) => {
        switch (tabName) {
            case 'tabOne' : {
                setList(RESTAURANTS)
                setSelectedTab('tabOne')
                break;
            }
            case 'tabTwo' : {
                setList(OUTING)
                setSelectedTab('tabTwo')

                break;
            }
            case 'tabThree' : {
                setList(STAY)
                setSelectedTab('tabThree')

                break;
            }
            case 'tabFour' : {
              setList(OTHERS)
              setSelectedTab('tabFour')

              break;
          }
        }
    }

    return (
        <View style={{ flex: 1,
          backgroundColor:'#2196f3'}}>
          <View style={styles.upperSection}>
          <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Animatable.Text
            useNativeDriver={true}
            duration={1000}
            animation="fadeInLeft"
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: 'white',
              letterSpacing: 2,
              textAlign:'center',
              alignSelf: 'center',
            }}>
            Explore {"\n"}
            your {"\n"}
            Surrounding!!
          </Animatable.Text>
        
          <Animatable.Image
            useNativeDriver={true}
            duration={1000}
            animation="fadeInRight"
            style={{height:150,width:150}}
            source={require('../assets/images/Agent2.png')}
          />
        </View>
          </View>
          <Animatable.View 
            animation="fadeInUp"
            style={styles.lowerSection}>
            
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',height:SCREEN_HEIGHT/10,alignItems:'center',marginTop:20,backgroundColor:'#2196f3',width:SCREEN_WIDTH-20,borderRadius:10,alignSelf:'center',elevation:5,shadowColor:'yellow',borderColor:'yellow',borderWidth:1}}>
                    <TouchableHighlight underlayColor='lightblue' style={{padding:10}} onPress={()=>selectTab('tabOne')}>
                            <Text style={[selectedTab=='tabOne'?{color:'#ffffff'}:{color:'#000000'},{fontSize:18,fontWeight:'700'}]}>
                              Restaurants
                            </Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='lightblue'  style={{padding:10}} onPress={()=>selectTab('tabTwo')}>
                            <Text style={[selectedTab=='tabTwo'?{color:'#ffffff'}:{color:'#000000'},{fontSize:18,fontWeight:'700'}]}> Outing</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='lightblue'  style={{padding:10}} onPress={()=>selectTab('tabThree')}>
                            <Text style={[selectedTab=='tabThree'?{color:'#ffffff'}:{color:'#000000'},{fontSize:18,fontWeight:'700'}]}>Stay</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='lightblue'  style={{padding:10}} onPress={()=>selectTab('tabFour')}>
                            <Text style={[selectedTab=='tabFour'?{color:'#ffffff'}:{color:'#000000'},{fontSize:18,fontWeight:'700'}]}>Others</Text>
                    </TouchableHighlight>
            </View>
            

            <View style={{flex:1,marginTop:24,width:SCREEN_WIDTH-20,alignSelf:'center',paddingBottom:20}}>
              
            <View style={{flex:1}}>
              <FlatList
                      data={list}
                      renderItem={renderItem}
                      keyExtractor={item=>item.id}
                  />
               </View>
            </View>
          
          </Animatable.View>
        </View>
      );
}



const styles = StyleSheet.create({
  upperSection:{
    flex:0.5,
    justifyContent:'center'
  },
  lowerSection :{
    flex:2,
    backgroundColor:'#f6f6f6',
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
    width:50,
    justifyContent:'center',

    alignSelf:'center',
    borderRadius:10,
    
  },
  btnView: {

    height:50,
    width:150,
    justifyContent:'center',
    marginRight:10,
    alignSelf:'flex-end',
    borderRadius:10,
    
  },
  getStart :{
    fontSize:24,
    fontWeight:'700',
    color:'white',
    textAlign:'center'
  }

})



export default HomeScreen;