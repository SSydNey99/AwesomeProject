import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
export default function Section3() {
    return (
        <View style={{ padding : 10  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Text style={{ borderRadius: 50 / 2 }}/>
                <View style={{ borderRadius: 50/2, width : 50 , height : 50 ,  backgroundColor: 'red'}}>
    <Text style={{ fontSize: 30, color : "white" }}>9.5</Text>
</View>

                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            </View>
   
        </View>    
    );
}