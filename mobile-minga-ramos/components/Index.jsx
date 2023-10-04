import React from 'react'
import { StyleSheet, Text, ImageBackground } from 'react-native';
import gojoPic from '../public/src/gojo.jpg'
import Hero from './Hero';
import LoginForm from './LoginForm';

const index = () => {
  return (
    <ImageBackground style={styles.container} source={gojoPic}>
      <Hero/>
      <LoginForm/>
      <Text style={styles.mingaIcon}>Minga 雪</Text>
    </ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mingaIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    width: 300,
    marginTop: 10
  },
  questionText: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});