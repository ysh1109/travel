import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import {LangContext} from '../contextApi/Language.js';
const App = () => {

  
    React.useEffect(()=>{

   },[])

  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
