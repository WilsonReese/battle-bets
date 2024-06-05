import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./Body.style";
import { Txt } from "../Txt/Txt";
import { GameCard } from "../GameCard/GameCard";

export function Body({}) {
  return (
    <>
      <View style={s.options}>
        {/* Need to make it so it displays all the games */}
        <Txt style={s.title}>Spread</Txt>
        <GameCard />
        <GameCard />
      </View>
      <View style={s.betSlip}>
        <Txt>Bet Slip</Txt>
      </View>
    </>
  );
}
