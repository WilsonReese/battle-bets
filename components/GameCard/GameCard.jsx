import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./GameCard.style";
import { Txt } from "../Txt/Txt";

export function GameCard({}) {
  return (
    <>
      <View style={s.card}>
        <Txt>Date and Time</Txt>
        <Txt>Teams, Icons, Records</Txt>
        <Txt>Bet Option</Txt>
      </View>
    </>
  );
}