import { View, Text, Image, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import loginImg from "../assets/login.jpg";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlePress = () => {
    console.log("Email:", user.email);
    console.log("Password:", user.password);
  };
  return (
    <View className="flex justify-center items-center mx-6 mt-4 space-y-4">
      <Image source={loginImg} className="rounded-lg h-[331px] w-[374px] " />
      <Text className="text-5xl my-4 font-semibold">Welcome Back!</Text>
      <View className="w-[327px] gap-1">
        <Text className="text-xl pl-2">Email</Text>
        <TextInput
          className="h-12 w-full border border-slate-600 p-4 text-slate-900 rounded-lg"
          onChange={(value) => {
            setUser({ email: value });
          }}
        />
      </View>
      <View className="w-[327px] gap-1">
        <Text className="text-xl pl-2">Password</Text>
        <TextInput
          className="h-12 w-full border border-slate-600 p-4 text-slate-900 rounded-lg"
          onChange={(value) => {
            setUser({ password: value });
          }}
        />
      </View>
      <TouchableHighlight
        className="w-[327px] h-14 bg-black rounded-xl justify-center"
        onPress={handlePress}
      >
        <Text className="text-white text-center text-2xl">Login</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
