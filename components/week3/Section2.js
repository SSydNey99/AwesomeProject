import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
export default function section2() {
  return (
    <View style={{flex : 0 , marginTop: -50, margin : 20 , padding: 20 ,  backgroundColor : "white" , borderWidth : 1, borderColor : 'gray', borderRadius : 20  }}>
      {/* View ก้อนที่ 3 */}
      <View style={{ marginTop: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Hilton San Fransisco
        </Text>
      </View>
      {/* View ก้อนที่ 4 */}
      <View
   
      >
        <View style={{ flexDirection: "row" , alignSelf : 'center'}}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>
        <View>
          <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
            Facilities provided may range from a modest quality mattress in a
            small room to large suites
          </Text>
        </View>
      </View>
    </View>
  );
}