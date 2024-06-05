import { Text, View } from 'react-native';
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Text>
              Header
            </Text>
          </View>
          <View style={s.body}>
            <Text>
              Options
            </Text>
            <Text>
              Bet Slip
            </Text>
          </View>
          <View style={s.footer}>
            <Text>
              Footer
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}