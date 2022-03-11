import React, {Component} from 'react';

import {
    Stylesheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export class ProfileScreen extends Component {

    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source= {{uri: 'https://i.pinimg.com/236x/bc/10/ec/bc10ec5e4c006e46090a8f5a335069ad.jpg'}}></Image>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}> JF Brette </Text>
                        <Text style={styles.info}>Prof de Java Serveur</Text>
                        <Text style={styles.description}> Je vais te bind à ma socket, ou tu veux être ma cliente ? </Text>

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text> DM ME </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text> See more informations </Text>
                        </TouchableOpacity>
                    </View>
                 </View>
            </View>

        )
    }
}

const styles = Stylesheet.create ({
    header: {
        backgrounColor : "#00BFFF",
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

    name: {
        fontsize:22,
        color:"#FFFFFF",
        fontWeight: '600',
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
        color:"#696969",
        fontWeight: "600",
    },

    info: {
        fontSize:16,
        color:"#00BFFF",
        marginTop:10,
    },
    
    descirpiton: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center',
    },

    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        bakcgroundColor:"#00BFFF"
    }

})
