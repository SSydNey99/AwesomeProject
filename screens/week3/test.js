import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Test() {
    return (
        <ScrollView style={{ margin: 50 }} >
            <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="Please enter your email"
                returnKeyType="next"
                onChangeText={(text) => { }}
                defaultValue="Default text"
            />

            <Button
                title="Press me"
                onPress={() => Alert.alert("Simple Button pressed")}
                color="#665544"
            />
            <Text> hello world vier </Text>
            
        
            <FontAwesome name="heart"  size={32} color="orange" />

            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />

            <View style={{ flexDirection: 'column' }}>
                {/* Fixed Size */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <Image style={{ width: 150, height: 100 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Image style={{ width: 150, height: 150, borderRadius: 150 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>
            </View>

            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'gray' }}>
                    <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                </View>

            </View>





        </ScrollView>






    );
}
