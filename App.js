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
import { Txt } from "./components/Txt/Txt";
import { Body } from "./components/Body/Body";

const GAME_DATA = [
  { id: 1, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
  { id: 2, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
  { id: 3, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
  { id: 4, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
  { id: 5, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
  { id: 6, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
  { id: 7, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
  { id: 8, homeTeam: "Vanderbilt", awayTeam: "Tennessee", homeRecord: "6-0", awayRecord: "6-0", date: "9/14", time: "6:00 PM", ou: "35.5", spread: "Vanderbilt -6.5", moneyLineHome: "Vanderbilt -150", moneyLineAway: "Tennessee +150" },
];

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
            <Body />
          </View>
          <View style={s.footer}>
            <Footer />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
