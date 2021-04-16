import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const SetInfoForm = ({ navigator }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          borderRadius: 10,
          width: "95%",
          height: 200,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Icons8_flat_add_image.svg/1024px-Icons8_flat_add_image.svg.png",
          }}
        /> */}
        <MaterialIcons name="add-photo-alternate" size={60} color="white" />
      </TouchableOpacity>
      <View style={{ width: "95%", marginTop: 30 }}>
        <View>
          <Text style={styles.textStyle}>Name</Text>
        </View>
        <TextInput placeholder="Email" style={styles.input} />
        <View>
          <Text style={styles.textStyle}>Description</Text>
        </View>
        <TextInput placeholder="Description" style={[styles.input]} />
        <View>
          <Text style={styles.textStyle}>Location</Text>
        </View>
        <TextInput placeholder="Location" style={[styles.input]} />
      </View>
      <TouchableOpacity style={styles.button} onPress={navigator}>
        <Text style={styles.buttonText}>Añadir Cambios</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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
  button: {
    padding: 5,
    borderRadius: 10,
    borderColor: colors.SECONDARY_YELLOW,
    borderWidth: 2,
    marginTop: 10,
  },
  buttonText: {
    color: colors.SECONDARY_YELLOW,
    fontWeight: "500",
  },
});

export default SetInfoForm;
