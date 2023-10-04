import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const Hero = () => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.textoPrincipal}>Welcome to MINGA!</Text>
            <Text style={styles.textoSecundario}>Discover a whole new world of adventure! Come take a look at our mangas</Text>
        </View>
    )
}

export default Hero


const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#B98D96',
        width: 350,
        display: 'flex',
        alignItems: 'center',
        opacity: 0.9,
        justifyContent: 'center',
        borderWidth: 3,
        marginTop: 30,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      textoPrincipal: {
        fontSize: 27,
        paddingBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontStyle: 'italic'
      },
      textoSecundario: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
      }
})