import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableOpacity
} from 'react-native';

export const ProfileScreen = () => {

    return (
        <View style = {styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source= {{uri: 'https://i.pinimg.com/236x/bc/10/ec/bc10ec5e4c006e46090a8f5a335069ad.jpg'}}></Image>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}> JF Brette </Text>
                    <Text style={styles.info}>Prof de Java Serveur</Text>
                    <Text style={styles.description}> Je vais te bind à ma socket, ou tu veux être ma cliente ? </Text>

                    <Pressable style={styles.connectPressable}>
                        <Text style={styles.buttonText}>DM ME</Text>
                    </Pressable>

                    <Pressable style={styles.connectPressable}>
                        <Text style={styles.buttonText}> Retour </Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor : "#00BFFF",
        height:200,
    },

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop:130
    },


    body: {
        marginTop:40,
    },

    bodyContent: {
        flex:1,
        alignItems: 'center',
        padding: 30,
    },

    name: {
        fontSize:28,
        color:"#ff788b",
        fontWeight: "600",
    },

    info: {
        fontSize:16,
        color:"#73141f",
        marginTop:10,
        marginBottom:20,
    },
    
    description: {
        fontSize: 16,
        color: "#000000",
        marginTop: 10,
        textAlign: 'center',
    },

    buttonContainer: {

        backgroundColor:"#00BFFF"
    },

    buttonText: {
        marginHorizontal:30,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    connectPressable: {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor:"#df4b3f",
        height:50,
    },
    container:{
        flex:1,
    },


})
