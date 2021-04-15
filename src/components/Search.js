import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../utils/colors";

export default function Search() {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchBarInner}>
        <Text style={styles.logo}>Logo</Text>
        <TextInput style={styles.searchInput} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
  },
  searchBarInner: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: colors.SECONDARY_YELLOW,
  },
  logo: {
    padding: 5,
  },
  searchInput: {
    width: "80%",
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 7,
  },
  button: {
    padding: 5,
    borderRadius: 10,
    borderColor: colors.PRIMARY_ORANGE,
    borderWidth: 2,
  },
  buttonText: {
    color: colors.PRIMARY_ORANGE,
    fontWeight: "500",
  },
});
