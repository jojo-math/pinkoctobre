import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";
import { useThemeMode } from "../theme/ThemeProvider";
export default function Index() {
  const { theme } = useThemeMode();
  return (
    <View className="flex-1 bg-black px-4 pt-10 items-center justify-center"
      style={{backgroundColor: theme === "dark" ? "#000" : "#fff"}}>
      <Text className="text-pinktober text-2xl font-extrabold mb-4">
        🎀 Les causes du cancer du sein
      </Text>
      <Image
        source={require("@/assets/images/00.png")}
        className="w-40 h-40 mb-6"
      />
      <Link href="/causes" className="text-white p-2 bg-pinktober-dark rounded-lg text-lg font-bold active:opacity-70">
        Découvrir les causes
      </Link>
    </View>

  );
}
