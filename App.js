import { Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import {
  useFonts,
  Saira_100Thin,
  Saira_200ExtraLight,
  Saira_300Light,
  Saira_400Regular,
  Saira_500Medium,
  Saira_600SemiBold,
  Saira_700Bold,
  Saira_800ExtraBold,
  Saira_900Black,
} from "@expo-google-fonts/saira";

export default function App() {
  const [fontsLoaded] = useFonts({
    Saira_400Regular,
    Saira_700Bold,
  });


  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <Text>Options</Text>
            <Text>Bet Slip</Text>
          </View>
          <View style={s.footer}>
            <Footer />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
