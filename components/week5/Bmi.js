import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
export default function Bmi() {  
        const [weight , setWeight] = useState('70');
        const [height , setHeight] = useState('170');
        const [bmi , setBmi] = useState('0');
        const [thisBMI , setthisBMI] = useState('');
        const [description, setDescription] = useState('');

    
        console.log("STATE : ", weight, height, bmi ,thisBMI );

        const onPressButton = () => {
            console.log("Calculate button is pressed!!!");
            let output = (weight/ (height/100 * height/100));
            setBmi(output.toFixed(2));
            setthisBMI(output.toFixed(2));
            getDescription(output.toFixed(2));
        };

        const getDescription = (bmi) => {
            let description = "";
            if (bmi < 18.5) {
              description = "Underweight - eat a bagel!";
            } else if (bmi >= 18.5 && bmi <= 24.99) {
              description = "Normal - keep it up!";
            } else if (bmi >= 25 && bmi <= 29.99) {
              description = "Overweight - exercise more!";
            } else if (bmi >= 30 && bmi <= 37.99) {
              description = "Obese - get off the couch!";
            } else if (bmi >= 38) {
              description = "Extremely Obese - seek medical attention!";
            }
            setDescription(description);
          };
    
      
    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{backgroundColor: "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20}} >
                <Text>Weight (kg.)</Text>
                <TextInput onChangeText={ (newWeight) => setWeight(newWeight) } value={ weight } keyboardType="numeric" placeholder="Input your weight"/>
            </View>
            {/* แถวที่ 2 */}
            <View style={{backgroundColor: "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20}} >
                <Text>Height (cm.)</Text>
                <TextInput onChangeText={ (newHeight) => setHeight(newHeight) } value={ height } keyboardType="numeric" placeholder="Input your weight" />
            </View>
            {/* แถวที่ 3 */}
            <View style={{flexDirection : "row", marginVertical:20}}>
                <View style={{backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginRight:10}}>
                    <Text>{ bmi }</Text>
                </View>
                <View style={{backgroundColor : "white", flex:1, borderRadius : 10, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10}}>
                    <Text>{description}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <Button title="Calculate" onPress={ onPressButton }/>  
                      
        </View>
    );
}
