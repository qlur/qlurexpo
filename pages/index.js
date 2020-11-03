// // @generated: @expo/next-adapter@2.1.0
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';


// export default function App() {
//   return (
 
//     <View style={styles.container}>
//        <LinearGradient
//     colors={['#0041b9', '#1769ff']}
//     style={{
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       top: 0,
//       height: 50,
//     }}
//  >
//      </LinearGradient>

//             <Text style={{color: '#888', fontSize: 30}}> Welcome to Qlur!👋</Text>
         
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 16,
    
//   },
// });



import React, { useState } from 'react';
import {SafeAreaView, View, Text, Platform} from 'react-native';
import tailwind from 'tailwind-rn';
import BottomNav from './platforms/native/components/BottomNav';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import Icon from './assets/fonts/icons/Icon';
import { Ionicons } from '@expo/vector-icons';

import DeviceInfo from 'react-native-device-info';

import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

import CollapsingNav from './platforms/native/components/CollapsingNav';

export default function App() {
const [isLoadingComplete, setLoadingComplete] = useState(false);


const isTabletOrMobileDevice = useMediaQuery({
  query: "(max-device-width: 1224px)",
});



  // loadResourcesAsync = async () => Promise.all([
  //   Font.loadAsync({
  //     'custom-icons': require('./assets/fonts/icons/merast.tff'),
  //   }),
  // ]);

  let [fontsLoaded] = useFonts({
    'merast': require('./assets/fonts/icons/merast.ttf'),
  });

//   handleLoadingError = (error) => {
//     // In this case, you might want to report the error to your error
//     // reporting service, for example Sentry
//     console.log(error);
//   };

// handleFinishLoading = () => {
//   setLoadingComplete(true)
//   };

  if (!fontsLoaded) {
    return (
      <AppLoading
        // startAsync={this.loadResourcesAsync}
        // onError={this.handleLoadingError}
        // onFinish={this.handleFinishLoading}
      >asd</AppLoading>
    );
  }
else {
return(
  
//   <SafeAreaView style={tailwind('h-full')}>

//   <View style={tailwind('pt-12 items-center')}>
//     <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
//       <Text style={tailwind('text-blue-800 font-semibold')}>
//         Welcome to Qlur 
//         <Icon name="coverage" size={30}  />
//         <Ionicons name="md-checkmark-circle" size={32} color="green" />
//         {  (isTabletOrMobileDevice) && "Its a mobile or tablet" } 


//       </Text>
//     </View>

//   </View>
//   {/* {Platform.OS != 'web' ? <BottomNav /> : ''} */}
//   <BottomNav />
// </SafeAreaView>


<CollapsingNav />

)
}
  

 };