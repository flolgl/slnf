import React, {useEffect, useState} from 'react';
import app, {auth, firestore} from "../firebase.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import {StyleSheet,Text,View,ImageBackground,Dimensions,ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {onAuthStateChanged} from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons'; 
import images from '../components/RequireImage.js';
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


export const ProfileScreen = () => {
	const [isFetching, setIsFetching] = useState(true)
	const [data, setData] = useState(null)
    const navigation = useNavigation();
  

	useEffect(()=>{
		onAuthStateChanged(auth, (newUser) => {
		  if (newUser){
	
			const q = query(collection(firestore, "utilisateurs"), where("uid", "==", newUser.uid));
			getDocs(q).then((docs) => {
				// doc.data() is never undefined for query doc snapshots
				docs.forEach(doc => {
					setData(doc.data())
					setIsFetching(false)
					return;
				})

			});

		  }

		});
	
	  
	}, [])

	const disconnectUser = () => {
		signOut(auth).then(() => {
			navigation.navigate("Login")
		  }).catch((error) => {
			// An error happened.
		  });
	}

	if (isFetching){
		return (<View>
			<Text>Loading</Text>
		</View>)
	}


    return (
        <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerProfile}>
          <ImageBackground source={images[data.image]} style={styles.photo}>
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
                <Text style={styles.name}>{data.nom}</Text>

                <Text style={styles.descriptionProfileItem}>
                    {data.age} - Paris
                </Text>
    
                <View style={styles.info}>
                    
                    <Ionicons name="person" size={16} color="#363636" style={styles.iconProfile} />
                    <Text style={styles.infoContent}>{data.description}</Text>
                </View>
            </View>
			
        </View>

		<View style={styles.logOutContainer}>
			<TouchableOpacity style={styles.button} onPress={disconnectUser}>
				<MaterialIcons name="logout" size={24} color="#0041c4" />
			</TouchableOpacity>
		</View>
      </ImageBackground>

    )
}

const styles = StyleSheet.create({

	logOutContainer:{
		justifyContent:'center',
		alignItems:"center",
		marginBottom:15,
	},
	containerProfile:{
		flex:1
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#ffffff",
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: "#363636",
		shadowOffset: { height: 10, width: 0 }
	},
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
