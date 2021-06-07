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
import "firebase/storage";
import firebase from "../utils/firebase";
const SetInfoForm = ({ navigator }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

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

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    const uri = image;
    const filename = uri.substring(uri.lastIndexOf("/") + 1);
    const uploadUri = Platform.OS === "ios" ? uri.replace("file://", "") : uri;
    setUploading(true);
    setTransferred(0);
    const task = storage().ref(filename).putFile(uploadUri);
    // set progress state
    task.on("state_changed", (snapshot) => {
      setTransferred(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
      );
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    setUploading(false);
    Alert.alert(
      "Photo uploaded!",
      "Your photo has been uploaded to Firebase Cloud Storage!"
    );
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
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
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
