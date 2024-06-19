import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import img from "./assets/background.jpg";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function App() {
  return (
    <>
      <ImageBackground
        className="w-full h-full "
        source={img}
        resizeMode="cover"
      >
        <SafeAreaView className="h-full justify-center items-center gap-2 mt-[300px]">
          <TouchableOpacity className="border w-[342px] h-14 justify-center rounded-xl">
            <View className="flex flex-row justify-center items-center gap-2">
              <Text className="text-3xl text-black text-center font-normal">
                Continue with Google
              </Text>
              <AntDesign name="google" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border w-[342px] h-14 justify-center rounded-xl">
            <View className="flex flex-row justify-center items-center gap-2">
              <Text className="text-3xl text-black text-center font-normal">
                Continue with Email
              </Text>
              <MaterialIcons name="email" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border w-[342px] h-14 justify-center rounded-xl">
            <View className="flex flex-row justify-center items-center gap-2">
              <Text className="text-3xl text-black text-center font-normal">
                Continue with Phone
              </Text>
              <Entypo name="phone" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
