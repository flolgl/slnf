import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo.js';
import { StatusBar } from 'expo-status-bar';

export const HomeScreen = () => {
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
            {Demo.map((item, index) => (
              <Card key={index}>
                <CardItem
                  image={item.image}
                  name={item.name}
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