import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import images from './RequireImage';

const CardItem = ({
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
}) => {
  // Custom styling
  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={images[image]} style={styles.imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={{color:"#ffffff"}}>
            {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={styles.nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* ACTIONS */}
      
        <View style={styles.actionsCardItem}>


          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Ionicons name="heart-outline" size={24} color="#0041c4" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}onPress={() => onPressRight()}>
            <Ionicons name="close" size={24} color="red" />            
          </TouchableOpacity>

        </View>
    </View>
  );
};

export default CardItem;


const styles = StyleSheet.create({
  containerCardItem: {
		backgroundColor: "#ffffff",
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "#000000",
		shadowOffset: { height: 0, width: 0 },
	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: "#0041c4",
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
  imageStyle: {
    borderRadius: 8,
    width: Dimensions.get('window').width - 80,
    height: 350,
    margin: 20,
  },
  nameStyle : {
    paddingTop: 15,
    paddingBottom: 7,
    color: '#363636',
    fontSize: 30,
  },
  descriptionCardItem: {
		color: "#757E90",
		textAlign: "center"
	},
  actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30
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
  
})