import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Switch,Text, View, SafeAreaView } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
// import ThemeSwitch from 'expo-dark-mode-switch';
import Button from './pages/components/atoms/Button/Button';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const [value, setValue] = useState(true);

  const colorScheme = useColorScheme();

  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content';
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <AppearanceProvider>

    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <StatusBar barStyle={themeStatusBarStyle} />

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled} />

        <Button></Button>
      <Text style={[styles.text, themeTextStyle]}>Color schemes: {colorScheme}</Text>


      {/* <ThemeSwitch value={value} onChange={value => setValue(value)} /> */}


    </SafeAreaView>
    </AppearanceProvider>

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