import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from './Button.styles.scss';


export default function Button() {
    return (
  
        // <TouchableOpacity style={styles.button}>
        //   <Text style={styles.buttonText}>Pick a photo</Text>
        // </TouchableOpacity>
        <View> 
        <Text style={{styles.button}}>
          Hello from SASS
    </Text>

      </View>
    );
  }
  