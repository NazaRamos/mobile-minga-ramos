import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Hero = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.textoPrincipal}>Welcome to </Text>
        <Text style={styles.textoMinga}>MINGA!</Text>
      </View>
      <Text style={styles.textoSecundario}>Discover a whole new world of adventure! Come take a look at our mangas</Text>
      <TouchableOpacity style={styles.touchableExplore} onPress={()=>navigation.navigate('Mangas')}>
        <Text style={styles.exploreButtonText}>Check them out!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Hero


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#B98D96',
    width: '90%',
    height: '25%',
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
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  textoPrincipal: {
    fontSize: 27,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontStyle: 'italic'
  },
  textoMinga:{
    fontSize: 27,
    paddingBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'gold'
  },
  textoSecundario: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  touchableExplore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#838F9F',
    width: 150,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderTopWidth: 1,
    borderBottomWidth: 3,
    borderStartWidth: 1,
    marginVertical: 10
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }
})