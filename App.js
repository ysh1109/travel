
import React,{useContext,useState,useEffect} from 'react';
import {
  StyleSheet,
} from 'react-native';
import NavApp from './src/navigation/index'
import {ListProvider} from './src/contextApi/Listing'
const App = () => {

  
  return (
    <><ListProvider>
        <NavApp/>
      </ListProvider>  
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
