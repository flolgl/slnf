import React, {useEffect, useState} from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, Text } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import { StatusBar } from 'expo-status-bar';
import { collection, query, getDocs } from "firebase/firestore";
import app, {auth, firestore} from "../firebase.js";



export const HomeScreen = () => {

	const [isFetching, setIsFetching] = useState(true)
	const [data, setData] = useState(null)

  useEffect(()=>{
    const q = query(collection(firestore, "utilisateurs"));
    let donnees = [];
    const User = auth.currentUser

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (User.uid != doc.data().uid)
          donnees.push(doc.data())


      });
      setData(donnees)
      setIsFetching(false)
    });
	}, [])

  if (isFetching){
		return (<View>
			<Text>Loading</Text>
		</View>)
	}


  return (
    <>
      <StatusBar/>

      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerHome}>


          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={swiper => (this.swiper = swiper)}
          >
            {data.map((item, index) => (
              <Card key={index}>
                <CardItem
                  image={item.image}
                  name={item.nom}
                  description={item.description}
                  matches={item.match}
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                />
              </Card>
            ))}
          </CardStack>
        </View>
      </ImageBackground>
    </>

  );
};

// 	containerHome: { marginHorizontal: 10 },
const styles = StyleSheet.create({
  bg: {
		flex: 1,
		resizeMode: "cover",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
  containerHome: { 
    marginHorizontal: 10,
    marginTop: 50,
  },

});