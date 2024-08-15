import React from "react";
import { Button, Image, Text, View } from "react-native";

export default function Section8() {
  return (
    <View style={{ padding: 20, borderTopWidth: 1, borderColor: "gray" }}>
      {/* View ก้อนที่ 1  */}
      <View style={{ flexDirection: "row"  , justifyContent: "space-between"   }}>
        <View>
          <Text style={{ fontSize: 20 }}>Price</Text>
          <Text style={{ fontSize: 20, color: "red" }}>$399.99</Text>
          <Text style={{ color: "black" }}>AVG/Night</Text>
        </View>
        <View style={{ padding: 20 }}>
          <Button title="Book Now" color="red"/>
        </View>
      </View>
    </View>
  );
}