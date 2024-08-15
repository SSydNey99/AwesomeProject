import React from 'react';
import { Image, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 5/2 }} source={require("../../assets/week3/trip-2.jpg")} />
            </View>
   
   
    );
}
