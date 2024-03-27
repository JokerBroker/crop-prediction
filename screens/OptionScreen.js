import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserData } from '../Contexts/UserData'
import { SafeAreaView } from "react-native";
// const crop_pre = {
//     id: 1,
//     name: "Crop Prediction",
//     image: require("../assets/images/crop.png"),
// };

// const ferti_pre = {
//     id: 2,
//     name: "Fertilizer",
//     image: require("../assets/images/fert.png"),
// };

export default function QuestionScreen({ navigation }) {
    const { option, setOption } = useContext(UserData)
    useEffect(() => {
        console.log("option Selected: ", option);
    }, [option]);

    return (
        <SafeAreaView>
            <Button title='Crop Prediction' onPress={navigation.navigate("CropPredictions")} color="#0C7641"></Button>
            <Button title='Fertilizer Prediction' onPress={navigation.navigate("FertilizerPredictions")} color="#0C7641"></Button>
        </SafeAreaView>
    );
}
