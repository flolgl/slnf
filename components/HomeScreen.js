import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { NavBar } from './NavBar';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <StatusBar style="auto" />
      </View>
    </View> 

  );
}


const styles = StyleSheet.create({

  container:{
      flex:1,
  },


})