import React from "react";
import { SafeAreaView } from "react-native";

import BigCard from "../components/BigCard.js";
import MapCard from "../components/MapCard.js";

export default function Info() {
  return (
    <SafeAreaView>
      <BigCard
        image={`https://shortie-img.s3.us-east-2.amazonaws.com/a.png`}
        title={`Abby's`}
        description={`Tienda de Novedades y Regalos Abby's`}
        likes={312}
        phone={"4296970977"}
      />
      <MapCard location={"Calle Ignacio Allende 216"} />
    </SafeAreaView>
  );
}
