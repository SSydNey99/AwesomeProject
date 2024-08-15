import React from "react";
import { View } from "react-native";
import Heartbeat from "../../components/week5/Heartbeat";
import Bmi from "../../components/week5/Bmi";

export default function Health() {
    return (
        <View style={{ flex: 1 , backgroundColor : 'lightblue', justifyContent : "center", padding : 20 }}>
            <Bmi  />
            <Heartbeat  />
        </View>
    );
}
