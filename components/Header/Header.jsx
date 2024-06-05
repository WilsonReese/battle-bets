import { Image, Text, View } from "react-native";
import { s } from "./Header.style";
import headerImage from "../../assets/white_logo.png"

export function Header({}) {
  return (
    <View>
      <Image
        style={s.image}
        source={headerImage}
      />
    </View>
  );
}