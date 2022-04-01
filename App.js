import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './pages/HomeScreen';
import {ProfileScreen} from './components/ProfileScreen';
import { Login } from './pages/Login';
import { initializeApp } from "firebase/app";
import React from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

const firebaseConfig = {
  apiKey: "AIzaSyCaMoglTtOR3JPnIcsr0FwAk1OOuKHxgsk",
  authDomain: "slnf-78521.firebaseapp.com",
  projectId: "slnf-78521",
  storageBucket: "slnf-78521.appspot.com",
  messagingSenderId: "540299659797",
  appId: "1:540299659797:web:d1719e150e7714fc3b9c1c"

};


const app = initializeApp(firebaseConfig);
const Tab = createBottomTabNavigator();
const auth = getAuth();

const startPage = auth.currentUser ? 'Home' : 'Login';

export default function App() {
  console.log(startPage)
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName={startPage}
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
        {
          startPage === 'Home' ? (
            <Tab.Screen name="Login" component={Login} options={{ headerShown: false, tabBarStyle: {display: 'none'}}}/>
          ) : (
            null
          )
        }

      </Tab.Navigator>
    </NavigationContainer>
  );
}


export {auth};
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
