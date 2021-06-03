import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "../utils/colors";
import { validateEmail } from "../utils/validation";
import firebase from "../utils/firebase";

export default function SignUpForm({ navigation }) {
  const [formData, setFormData] = useState(defaultValue);
  const [formError, setFormError] = useState({});

  const register = () => {
    console.log("registrando...");
    let error = {};

    if (!formData.email || !formData.password) {
      if (!formData.email) error.email = true;
      if (!formData.password) error.password = true;
    } else if (!validateEmail(formData.email)) {
      error.email = true;
    } else if (formData.password.length < 6) {
      error.password = true;
    } else {
      console.log(formData);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          console.log("cuenta creada");
          //navigation.push("SetInfo");
          navigation.push("Login");
        })
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          });
        });
    }
    setFormError(error);
  };

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <View>
          <Text style={styles.textStyle}> Email Address</Text>
        </View>
        <TextInput
          placeholder="Email"
          style={[styles.input, formError.email && styles.errorInput]}
          onChange={(e) =>
            setFormData({ ...formData, email: e.nativeEvent.text })
          }
        />
        <View>
          <Text style={styles.textStyle}>Password</Text>
        </View>
        <TextInput
          placeholder="Password"
          style={[styles.input, formError.password && styles.errorInput]}
          secureTextEntry={true}
          onChange={(e) =>
            setFormData({ ...formData, password: e.nativeEvent.text })
          }
        />
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={register}>
        <Text style={styles.textLogin}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    width: "85%",
    borderRadius: 5,
    height: 350,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#d4d4d4",
  },
  viewInput: {
    flexDirection: "column",
    top: 20,
    paddingLeft: 10,
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
    top: 120,
  },
  textLogin: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  errorInput: {
    borderColor: "#940c0c",
  },
});

function defaultValue() {
  return {
    email: {},
    password: {},
  };
}
