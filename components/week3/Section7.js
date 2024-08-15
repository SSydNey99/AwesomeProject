import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1  */}
            <Text style={{ fontSize: 20, borderTopWidth  : 1, borderColor : 'gray'  }}>Room Type</Text>
            {/* View ก้อนที่ 2  */}
            <View style={{ flexDirection: "row"}}>
           
                <Image style={{ width: 120, height: 130, borderRadius: 10}} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10  }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <Text  style={{marginTop : 30 , fontSize : 20 , color : 'red'}} >$399.99</Text>
                    <Text style={{ color: "#4682B4" }}>Hurry Up! This is your last room!</Text>

                </View>
            </View>

        </View>    
    );
}