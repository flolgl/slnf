import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './pages/HomeScreen';
import {ProfileScreen} from './pages/ProfileScreen';
import { Login } from './pages/Login';
import React, {useState, useEffect} from "react";
import {onAuthStateChanged} from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import app, {auth, firestore} from "./firebase.js";
import { View, Text} from 'react-native';
import { Register } from './pages/Register';



const Tab = createBottomTabNavigator();

const startPage =true

export default function App() {

  const [isFetching, setIsFetching] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth, (newUser) => {
      //console.log(newUser)
      setUser(newUser)
      setIsFetching(false)

    });

  }, [])

  if (isFetching){
    return <View>
      <Text>Loading</Text>
    </View>
  }
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName={user ? "Home" : "Login"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-sharp'
              : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0041c4',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false, tabBarStyle: {display: 'none'}, tabBarButton:() => null}}/>
        <Tab.Screen name="Register" component={Register} options={{ headerShown: false, tabBarStyle: {display: 'none'}, tabBarButton:() => null}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}


/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
