import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {
  return (
    <SafeAreaView>
      <Register />
      <StatusBar />
    </SafeAreaView>
  );
}
