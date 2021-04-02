import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Animatable from 'react-native-animatable';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = useState(null);

  const loginHandler = async() => {
    navigation.navigate('Home')
    if(email!=""&&password!=""){
      try {
        const username = await AsyncStorage.getItem('email');
        const pwd = await AsyncStorage.getItem('password')
        if (username !== null && pwd !=null) {
          // We have data!!
          
          console.log(username,pwd);
          if(username == email && pwd == password) {
            ToastAndroid.show("Welcome to Travel", ToastAndroid.LONG);
            navigation.navigate('Home')
          }
          else {
            ToastAndroid.show("Please Enter Valid Credentials", ToastAndroid.LONG);
          }
          
        }
        else {
          ToastAndroid.show("Please Register first", ToastAndroid.LONG);
        }
      } catch (error) {
        // Error retrieving data
      }
      
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#2196f3'}}>
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
              fontSize: 28,
              fontWeight: '700',
              color: 'white',
              letterSpacing: 2,
              textAlign:'center',
              alignSelf: 'center',
            }}>
            Welcome! {"\n"}
            To {"\n"}
            Travel
          </Animatable.Text>
        
          <Animatable.Image
            useNativeDriver={true}
            duration={1000}
            animation="fadeInRight"
            style={{height:150,width:150}}
            source={require('../assets/images/Agent.png')}
          />
        </View>
      </View>

      <Animatable.View
        duration={1000}
        useNativeDriver={true}
        animation="fadeInUp"
        style={styles.lowerSection}>
        <View style={{width: '90%', alignSelf: 'center', marginTop: 30}}>
          <View style={[{flexDirection: 'row'}, styles.textbox]}>
            {/* <Text style={{fontWeight:'700',fontSize:22}}>Email</Text> */}
            <View style={{flex: 0.1, justifyContent: 'center'}}>
              <MaterialIcon
                style={{alignSelf: 'center'}}
                name="email"
                size={20}
              />
            </View>
            <View style={{flex: 1}}>
              <TextInput
                style={styles.email}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="enter email"
              />
            </View>
          </View>
          <View style={[{flexDirection: 'row', marginTop: 10}, styles.textbox]}>
            {/* <Text style={{fontWeight:'700',fontSize:22}}>Password</Text> */}
            <View style={{flex: 0.1, justifyContent: 'center'}}>
              <Icon style={{alignSelf: 'center'}} name="lock" size={20} />
            </View>
            <View style={{flex: 1}}>
              <TextInput
                secureTextEntry={true}
                textContentType="password"
                style={styles.password}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="enter password"
              />
            </View>
          </View>

          <TouchableOpacity onPress={()=>loginHandler()}
            style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpBtn}>
            <Text
              style={{
                color: 'black',
                alignSelf: 'flex-end',
                paddingRight: 20,
                fontSize: 18,
                fontWeight: '700',
                marginTop: 5,
              }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
              marginTop: 20,
            }}></View>
          <Text
            style={{
              alignSelf: 'center',
              top: -12,
              backgroundColor: 'white',
              fontWeight: '700',
              fontSize: 18,
            }}>
            OR
          </Text>

          <TouchableOpacity
            onPress={() => {}}
            style={[styles.loginBtnFb, {flexDirection: 'row'}]}>
            <Icon
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                paddingRight: 10,
              }}
              name="mobile"
              size={20}
              color="white"
            />
            <Text style={styles.fbBtn}>Login with Mobile Number</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.loginBtnGoogle, {flexDirection: 'row'}]}>
            <Icon
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                paddingRight: 10,
              }}
              name="google-plus"
              size={20}
              color="white"
            />
            <Text style={styles.googleBtn}>Login with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={styles.signUpBtn}>
            <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: '700',
                marginTop: 15,
              }}>
              New User? Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperSection: {
    flex: 0.8,
    justifyContent: 'center',
  },
  lowerSection: {
    flex: 2,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  intro: {
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
    // fontFamily:'AndikaNewBasic-Bold'
  },
  email: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 10,
  },

  textbox: {
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderColor: 'transparent',
  },

  password: {
    fontSize: 18,
    paddingLeft: 10,

    fontWeight: '700',
    borderColor: 'gray',
  },

  loginBtn: {
    height: 50,
    backgroundColor: '#2196f3',
    elevation: 10,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  loginBtnText: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '700',
    borderWidth: 0.5,
    borderColor: 'transparent',
    color: 'white',
  },

  signUpBtn: {
    justifyContent: 'center',
  },
  loginBtnGoogle: {
    height: 50,
    backgroundColor: '#DB4437',
    elevation: 10,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  loginBtnFb: {
    height: 50,
    backgroundColor: '#4267B2',
    elevation: 10,
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  googleBtn: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  fbBtn: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default (LoginScreen);
