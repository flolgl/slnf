import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const name = "Nico Cuzon"
const age = 20
const location = "Paris"
const info = "blalblalblblbllbl"

export const ProfileScreen = () => {

    return (
        <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <ScrollView style={styles.containerProfile}>
          <ImageBackground source={{uri: 'https://i.pinimg.com/236x/bc/10/ec/bc10ec5e4c006e46090a8f5a335069ad.jpg'}} style={styles.photo}>
            <View style={styles.top}>
            </View>
          </ImageBackground>
  
            <View style={styles.containerProfileItem}>
                <View style={styles.matchesProfileItem}>
                    <Text style={{color:"#ffffff",}}>
                        <Ionicons name="heart" />
                        Chauve Him Love
                    </Text>
                </View>
                <Text style={styles.name}>{name}</Text>

                <Text style={styles.descriptionProfileItem}>
                    {age} - {location}
                </Text>
    
                <View style={styles.info}>
                    
                    <Ionicons name="person" size={16} color="#363636" style={styles.iconProfile} />
                    <Text style={styles.infoContent}>{info}</Text>
                </View>
            </View>

        </ScrollView>
      </ImageBackground>

    )
}

const styles = StyleSheet.create({
    bg: {
		flex: 1,
		resizeMode: "cover",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
    top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
    matchesProfileItem: {
		width: 170,
		marginTop: -15,
		backgroundColor: "#0041c4",
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
    containerProfileItem: {
		backgroundColor: "#ffffff",
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "#000000",
		shadowOffset: { height: 0, width: 0 }
	},
    name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: "#363636",
		fontSize: 15,
		textAlign: "center"
	},
    descriptionProfileItem: {
		color: "#757E90",
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},

    info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center",
	},
	iconProfile: {
		color: "#363636",
        marginRight: 3,
	},
	infoContent: {
		color: "#757E90",
		fontSize: 16,
	},
    photo: {
		width: Dimensions.get("window").width,
		height: 450
	},

})
