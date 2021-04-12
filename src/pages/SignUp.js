import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import SignUpForm from '../components/SignUpForm.js';

export default function Login() {
  return (
    <>

      <View style={styles.topBar}>
        <Image
          style={styles.topBarImage}
          source={require("../assets/Sign_01.png")}
        />
      </View>

      {/* <View style={styles.safeArea}>
        <Text style={styles.titleApp}> Login</Text>
      </View> */}

      <View style={styles.bottomBar}>
        <Image
          style={styles.bottomBarImage}
          source={require("../assets/Sign_02.png")}
        />
      </View>
      <SafeAreaView style={styles.safeArea}>
        <SignUpForm />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topBar: {
    top: 0,
    height: '50%',
    zIndex: -1
  },
  topBarImage: {
    width: '100%',
    height: 250,
    position: 'absolute',
  },
  bottomBar: {
    bottom: -210,
    zIndex: -1
  },
  bottomBarImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
  },
  titleApp: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFF',
    position: 'absolute',
    top: 0,
  },

  safeArea: {
    top: 200,
    alignItems: "center"
  },


});

