import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground} from 'react-native';
import TextInput from 'react-native-material-textinput'
import * as EmailValidator from 'email-validator';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [connectionError, setConnectionError] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        return onAuthStateChanged(auth,user => {
            if (user){
                //console.log("User is logged in");
                navigation.navigate("Home")

            }
        })
    }, [])

    const errorCheck = () => {  
        setErrorEmail("")
        setErrorPassword("")
        setConnectionError("")

        let error = false; 
        if (!EmailValidator.validate(email)){
            setErrorEmail("Merci de rentrer une adresse mail valide")
            error = true;
        }

        if (password.trim() === ""){
            setErrorPassword("Merci de rentrer un mot de passe valide")
            error = true;
        }
        return error;
    }

    const onPress = () => {
        if (errorCheck())
            return;
        

        //firebase authentification

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log("connected")
            // ...
        })
        .catch((error) => {
            console.log(error)
            setConnectionError("L'email ou le mot de passe sont incorrects")
        });


    }


    return (
        <ImageBackground style={{ flex: 1,}} source={require('../assets/images/back.png')}>
            <StatusBar/>

            <Text style={styles.connexionHeader}>Connexion</Text>
            <View style={styles.container}>

                <View>
                    <Text style={{color:"#01214f", fontWeight: 'bold', fontSize:25,}} >Heureux de vous revoir</Text>
                    <Text style={{color:"gray", marginTop:5}}>Connectez-vous pour continuer !</Text>

                    <View style={styles.form}>
                        {BuildTextInput(false, "Email", setEmail, errorEmail)}
                        {BuildTextInput(true, "Mot de passe", setPassword, errorPassword)}
                    </View>
                    
                    <Pressable onPress={() => alert("Pas encore fonctionnel")}>
                        <Text style={styles.forgotPw}>Mot de passe oublié ?</Text>
                    </Pressable>

                    <Text style={{color:"red", marginTop:5, marginBottom: 5, textAlign:"center"}}>{connectionError}</Text>

                    <Pressable style={styles.connectPressable} onPress={onPress}>
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </Pressable>
                </View>
                
                <View style={{alignItems:'center'}}>
                    <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.forgotPw}>Pas encore membre ? Créer un compte</Text>
                    </Pressable>
                </View>

  

            </View>




        </ImageBackground>

    )
}


/**
 * 
 * @param {boolean} password 
 * @param {string} text 
 */
const BuildTextInput = (password, phText, cbState, error) => {

    return (
        <TextInput
            label={phText}
            onChangeText={(text) => cbState(text)}
            autoComplete = {password ? "email" : "password"}
            secureTextEntry = {password}
            error= {error}
        />
    )

}   


const styles = StyleSheet.create({

    container:{
        padding:25,
        flex:1,
        backgroundColor:'#ffffff',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 20,
        justifyContent:"space-between",
    },

    form: {
        paddingVertical:10,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    connectPressable: {
        color:"#ffffff",
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius:10, 
        backgroundColor:"#0041c4", 
        height:50, 
    },
    forgotPw: {
        color:"#0041c4",
        marginTop:10,
        marginBottom:20,
        textAlign:"right"
    },
    connexionHeader:{
        color:"#ffffff", 
        fontWeight: 'bold', 
        paddingTop:50,
        marginVertical:50, 
        marginLeft:25, 
        fontSize:25
    }
})
