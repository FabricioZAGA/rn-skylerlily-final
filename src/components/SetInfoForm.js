import React, { useState, useEffect } from "react";
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
import * as ImagePicker from "expo-image-picker";
import Geocoder from "react-native-geocoding";
import firebase from "../utils/firebase";

const db = firebase.firestore();
const SetInfoForm = ({ navigator }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    const uri = image;
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child("prueba");
    const snapshot = await ref.put(blob);
    blob.close();

    return await snapshot.ref.getDownloadURL();
  };

  const getLocation = async () => {};

  const uploadInfo = async () => {
    const imageUrl = await uploadImage();
    var locationObj = [];
    Geocoder.init("AIzaSyB4yf6tElNh8nKz9C2AXcigAZPa_lbur-U");
    Geocoder.from(formData.location)
      .then((json) => {
        locationObj = json.results[0].geometry.location;

        const obj = {
          description: formData.description,
          image: imageUrl,
          likes: 0,
          location: locationObj,
          phoneNumber: "",
          title: formData.title,
          userId: "231jkh123b123",
        };
      })
      .catch((error) => console.warn(error));

    console.log(obj);
  };

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
        onPress={pickImage}
      >
        {image ? (
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={{
              uri: image,
            }}
          />
        ) : (
          <MaterialIcons name="add-photo-alternate" size={60} color="white" />
        )}
      </TouchableOpacity>
      <View style={{ width: "95%", marginTop: 30 }}>
        <View>
          <Text style={styles.textStyle}>Name</Text>
        </View>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChange={(e) =>
            setFormData({ ...formData, title: e.nativeEvent.text })
          }
        />
        <View>
          <Text style={styles.textStyle}>Description</Text>
        </View>
        <TextInput
          placeholder="Description"
          style={[styles.input]}
          onChange={(e) =>
            setFormData({ ...formData, description: e.nativeEvent.text })
          }
        />
        <View>
          <Text style={styles.textStyle}>Location</Text>
        </View>
        <TextInput
          placeholder="Location"
          style={[styles.input]}
          onChange={(e) =>
            setFormData({ ...formData, location: e.nativeEvent.text })
          }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={getLocation}>
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

function defaultValue() {
  return {
    description: null,
    image: null,
    likes: null,
    score: null,
    location: null,
    phoneNumber: null,
    title: null,
    userId: null,
  };
}

export default SetInfoForm;
