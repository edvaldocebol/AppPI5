import React from "react";
import { View, Text,TextInput } from "react-native";
import Input from "../../components/edText/index";

function Login() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Olá mundo</Text>
            <TextInput style={Input.edText}/>
        </View> 
    );
}

export default Login;
