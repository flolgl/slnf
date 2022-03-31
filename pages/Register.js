import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground} from 'react-native';
import TextInput from 'react-native-material-textinput'
import * as EmailValidator from 'email-validator';

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
        width:"100%",
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

export const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPw, setCopyPw] = useState('');
    
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const onPress = () => {
        setErrorEmail("")
        setErrorPassword("")

        let error = false; 
        if (!EmailValidator.validate(email)){
            setErrorEmail("Merci de rentrer une adresse mail valide")
            error = true;
        }

        if (password.trim() === "" || copyPw.trim() === ""){
            setErrorPassword("Merci de rentrer un mot de passe valide")
            error = true;
        }

        if (password.trim() != copyPw.trim()){
            setErrorPassword("Les mots de passe ne correspondent pas")
            error = true;
        }

        return error ? null : alert(email+password)
    }


    return (
        <ImageBackground style={{ flex: 1,}} source={require('../assets/images/back.png')}>
            <StatusBar/>

            <Text style={styles.connexionHeader}>Creation d'un compte</Text>
            <View style={styles.container}>

                <View>
                    <Text style={{color:"#01214f", fontWeight: 'bold', fontSize:25,}} >Heureux de vous rencontrer</Text>
                    <Text style={{color:"gray", marginTop:5}}>Connectez-vous pour continuer !</Text>

                    <View style={styles.form}>
                        {BuildTextInput(false, "Email", setEmail, errorEmail)}
                        {BuildTextInput(true, "Mot de passe", setPassword, errorPassword)}
                        {BuildTextInput(true, "Confirmation du mot de passe", setCopyPw, errorPassword)}
                    </View>

                    <Pressable style={styles.connectPressable} onPress={onPress}>
                        <Text style={styles.buttonText}>S'enregistrer</Text>
                    </Pressable>
                </View>

                <View style={{alignItems:'center'}}>
                    <Pressable onPress={() => alert("Pas encore fonctionnel")}>
                        <Text style={styles.forgotPw}>Déjà membre ? Se connecter</Text>
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

