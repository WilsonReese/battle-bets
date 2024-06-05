import { Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export default function App() {
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
