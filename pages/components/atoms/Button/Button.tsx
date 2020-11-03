import React from 'react';
import {StyleSheet, TouchableHighlight ,Image, Text, TouchableOpacity, View } from 'react-native';
import styless from './button.scss';

 const Button = ()  => {

    return (
  
        // <TouchableHighlight  styleName={styles.button}>
    <Text style={styless.buttonText}>{styles.lightContainer}</Text>

        // </TouchableHighlight>
   
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    lightContainer: {
      backgroundColor: '#D0D0C0',
    },
    darkContainer: {
      backgroundColor: '#242C40',
    },
    lightThemeText: {
      color: '#242C40',
    },
    darkThemeText: {
      color: '#D0D0C0',
    },
  });


  export default Button;