import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../utils/colors";

export default function LoginForm({ navigateList, navigateSignUp }) {
  return (
    <>
      <View style={styles.viewForm}>
        <View style={styles.viewInput}>
          <View>
            <Text style={styles.textStyle}> Email Address</Text>
          </View>
          <TextInput placeholder="Email" style={styles.input} />
          <View>
            <Text style={styles.textStyle}>Password</Text>
          </View>
          <TextInput placeholder="Password" style={styles.input} />
          <TouchableOpacity style={styles.buttonLogin} onPress={navigateList}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignup}
            onPress={navigateSignUp}
          >
            <Text style={styles.texSignup}>New arround here? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    width: "85%",
    borderRadius: 5,
    height: 370,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
  },
  viewInput: {
    flexDirection: "column",
    top: 20,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    borderColor: "#d4d4d4",
    width: "95%",
    marginHorizontal: 5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
    paddingBottom: 10,
  },
  buttonStyle: {
    width: 50,
  },
  buttonLogin: {
    backgroundColor: colors.PRIMARY_ORANGE,
    padding: 5,
    borderRadius: 10,
    width: "30%",
    marginLeft: 10,
    top: 25,
  },
  textLogin: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  buttonSignup: {
    padding: 5,
    borderRadius: 10,
    width: "60%",
    marginLeft: 10,
    top: 100,
  },
  textSignup: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
});
