import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const LoginForm = ({navigation}) => {
    return (
        <View style={styles.loginBackground}>
            <Text style={styles.loginTitle}>Login:</Text>
            <Text style={styles.loginTexts}>   Email:</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.loginTexts}>   Password:</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} />
            <TouchableOpacity style={styles.touchableLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.questionText}>You don't have an account yet?</Text>
            <TouchableOpacity style={styles.touchableRegister} onPress={()=>navigation.navigate('Register')}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <StatusBar style='auto' translucent={false} backgroundColor='white' />
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    loginTitle: {
        fontSize: 23,
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    textInput: {
        width: 250,
        backgroundColor: 'grey',
        marginVertical: 10,
        opacity: 0.9,
        color: 'black',
    },
    loginTexts: {
        fontSize: 16,
        fontWeight: 'bold',
        display: 'flex',
        width: 250,
    },
    loginBackground: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        width: '73%',
        height: '45%',
        backgroundColor: 'white',
        opacity: 0.8,
        borderWidth: 3,
        marginTop: 70,
        borderRadius: 10
    },
    touchableLogin: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B98D96',
        width: 150,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderStartWidth: 1,
        marginBottom: 5
    },
    touchableRegister: {
        display: 'flex',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#838F9F',
        width: 150,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderStartWidth: 1
    },
    loginButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    registerButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    questionText: {
      fontSize: 17,
      fontWeight: 'bold'
    }
})
