import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./Footer.style";
import { Txt } from "../Txt/Txt";

export function Footer({}) {
  return (
    <View style={s.menu}>
      <TouchableOpacity>
        <Txt style={s.menuItem}>Menu Item 1</Txt>
      </TouchableOpacity>
      <TouchableOpacity>
        <Txt style={s.menuItem}>Menu Item 2</Txt>
      </TouchableOpacity>
      <TouchableOpacity>
        <Txt style={s.menuItem}>Menu Item 3</Txt>
      </TouchableOpacity>
    </View>
  );
}
