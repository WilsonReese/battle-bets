import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "./Footer.style";

export function Footer({}) {
  return (
    <View style={s.menu}>
      <TouchableOpacity>
        <Text style={s.menuItem}>Menu Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={s.menuItem}>Menu Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={s.menuItem}>Menu Item 3</Text>
      </TouchableOpacity>
    </View>
  );
}
