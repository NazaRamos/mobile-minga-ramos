import React from 'react'
import { StyleSheet, Text, ImageBackground } from 'react-native';
import gojoPic from '../public/src/gojo.jpg'
import Hero from './Hero';
import LoginForm from './LoginForm';

const Index = (props) => {
  return (
    <ImageBackground style={styles.container} source={gojoPic}>
      <Hero navigation={props.navigation}/>
      <LoginForm navigation={props.navigation}/>
      <Text style={styles.mingaIcon}>Minga 雪</Text>
    </ImageBackground>
  )
}

export default Index

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
    marginVertical: 20
  }
});