import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import colors from '../utils/colors';

export default function Search() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10, flexDirection: 'row', backgroundColor: colors.SECONDARY_YELLOW }}>
        <Text style={{ padding: 5 }}>Logo</Text>
        <TextInput style={{
          width: "80%",
          backgroundColor: "white",
          placeholder: "Search",
          placeholderTextColor: "black",
          marginHorizontal: 10,
          borderRadius: 7
        }} />
        <TouchableOpacity style={{
          padding: 5,
          borderRadius: 10,
          borderColor: colors.PRIMARY_ORANGE,
          borderWidth: 2,
        }}>
          <Text style={{ color: colors.PRIMARY_ORANGE, fontWeight: '500' }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}