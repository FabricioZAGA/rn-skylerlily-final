import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import BigCard from "../components/BigCard.js";
import MapCard from "../components/MapCard.js";

export default function Info({ route }) {
  const { description, image, likes, location, phoneNumber, title } =
    route.params;
  return (
    <SafeAreaView>
      <BigCard
        image={image}
        title={title}
        description={description}
        likes={likes}
        phone={phoneNumber}
      />
      <MapCard location={"Calle Ignacio Allende 216"} coordinates={location} />
    </SafeAreaView>
  );
}
