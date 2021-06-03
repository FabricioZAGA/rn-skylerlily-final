import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import SignUpForm from "../components/SignUpForm.js";

export default function SetInfo({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.backgroundContainer}>
        <View style={styles.topBar}>
          <Image
            style={styles.topBarImage}
            source={require("../assets/Sign_01.png")}
          />
        </View>
        <View style={styles.bottomBar}>
          <Image
            style={styles.bottomBarImage}
            source={require("../assets/Sign_02.png")}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.formContainer}>
        <Text style={styles.titleApp}>SignUp</Text>
        <SignUpForm navigation={navigation} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    zIndex: -2,
  },
  formContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    top: 0,
    height: "50%",
    width: "100%",
    zIndex: -1,
    position: "absolute",
  },
  topBarImage: {
    width: "100%",
    height: 250,
  },
  bottomBar: {
    bottom: 0,
    height: "50%",
    width: "100%",
    zIndex: -1,
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomBarImage: {
    width: "100%",
    height: "50%",
  },
  titleApp: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginBottom: 100,
  },
});
