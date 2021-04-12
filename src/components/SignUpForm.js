import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

export default function SignUpForm() {

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <View>
          <Text style={styles.emailText}> Email Address</Text>
        </View>
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <View>
          <Text style={styles.emailText}>Password</Text>
        </View>
        <TextInput
          placeholder="Password"
          style={[styles.input]}
        />

      </View>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={styles.textLogin}>SignUp</Text>
      </TouchableOpacity >

    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: '40%',
    width: '85%',
    paddingHorizontal: '',
    borderRadius: 5,
    height: 350,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#d4d4d4',
  },
  viewInput: {
    flexDirection: 'column',
    top: 20,
    paddingLeft: 10,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    borderColor: '#d4d4d4',
    width: '95%',
    marginHorizontal: 5,

    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  emailText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000',
    paddingBottom: 10
  },
  buttonStyle: {
    width: 50,
  },
  buttonLogin: {
    backgroundColor: colors.PRIMARY_ORANGE,
    padding: 5,
    borderRadius: 10,
    width: '30%',
    marginLeft: 10,
    top: 120
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
