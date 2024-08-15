import React, { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [count , setCount] = useState(0);
    
    const handlePress = () => {
        setCount(count + 1);
    };
    return (
        
        <View style={{flexDirection : "row" , justifyContent: "space-around" , padding : 50}}>
            <TouchableOpacity onPress={handlePress}>
                <FontAwesome style={{ color: "red"}} name="heart" size={50} />
            </TouchableOpacity>
            <Text style={{fontSize: 50}}>{count}</Text>
            </View> 
          
    );
}
