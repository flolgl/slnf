import { StyleSheet, View, Text, Pressable, ImageBackground, Icon} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React, {useState} from 'react';


export const NavBar = () => {

    const [indexNavBar, setindexNavBar] = useState(0);

    return (
       <View style={styles.navBar}>
            <Pressable onPress={() => setindexNavBar(0)}>
                <MaterialIcons name="account-circle" size={32} color="grey" />
            </Pressable>
            {/* <Pressable onPress={() => setindexNavBar(1)}>
                <Ionicons name="md-profile" size={32} color="grey" />
            </Pressable> */}
            <Pressable onPress={() => setindexNavBar(1)}>
                <MaterialIcons name="account-circle" size={32} color="grey" />
            </Pressable>
       </View>
    )

}

const styles = StyleSheet.create({

    navButton:{
        width: "25%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center"
    },

    navBar:{
        width: "100%",
        flexDirection:"row",    
        justifyContent:"space-around",
        alignItems:"center",
        height: "10%",
        backgroundColor:"#ffffff",  
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 20,
        padding:10,
        elevation:5,
        marginTop:10,
    }

})