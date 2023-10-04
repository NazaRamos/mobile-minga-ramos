import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import sakuraPic from '../public/src/sakura.jpg'

const Register = () => {
    return (
        <ImageBackground style={styles.container} source={sakuraPic}>
            <View style={styles.loginBackground}>
                <Text style={styles.loginTitle}>Register:</Text>
                <Text style={styles.loginTexts}>   Username:</Text>
                <TextInput style={styles.textInput} />
                <Text style={styles.loginTexts}>   Email:</Text>
                <TextInput style={styles.textInput} />
                <Text style={styles.loginTexts}>   Photo (as url):</Text>
                <TextInput style={styles.textInput} />
                <Text style={styles.loginTexts}>   Password:</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} />
                <TouchableOpacity style={styles.touchableLogin}>
                    <Text style={styles.loginButtonText}>Sign up</Text>
                </TouchableOpacity>
                <StatusBar style='auto' translucent={false} backgroundColor='white' />
            </View>
        </ImageBackground>
    )
}

export default Register


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTitle: {
        fontSize: 23,
        paddingBottom: 7,
        fontWeight: 'bold',
    },
    textInput: {
        width: '80%',
        backgroundColor: 'grey',
        marginVertical: 10,
        opacity: 0.9,
        color: 'black',
    },
    loginTexts: {
        fontSize: 16,
        fontWeight: 'bold',
        display: 'flex',
        width: '80%',
    },
    loginBackground: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        width: '80%',
        height: '70%',
        backgroundColor: 'white',
        opacity: 0.8,
        borderWidth: 3,
        borderRadius: 10
    },
    touchableLogin: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B98D96',
        width: '50%',
        height: '6.5%',
        borderRadius: 15,
        borderWidth: 3,
        borderTopWidth: 1,
        borderBottomWidth: 3,
        borderStartWidth: 1,
        marginTop: 20
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
    }
})
