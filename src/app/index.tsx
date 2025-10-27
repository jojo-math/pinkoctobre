import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";
import { useThemeMode } from "../theme/ThemeProvider";
export default function Index() {
  const { theme } = useThemeMode();
  return (
    <View className="flex-1 dark:bg-black px-4 pt-10 items-center justify-center text-center"
      // style={{backgroundColor: theme === "dark" ? "#000" : "#fff"}}
      >
        <View className="items-center justify-center flex-row mb-6">
          <Text className="text-pinktober text-center text-2xl font-extrabold flex-wrap ">
        🎀 Luttons contre le cancer du sein 🎀
          </Text>
        </View>
      <Image
        source={require("@/assets/images/2151064600.jpg")}
        style={{width:300, height:300, margin:20, borderRadius:20, boxSizing:"border-box", shadowRadius:10, shadowColor:"#000", shadowOpacity:0.3, shadowOffset:{width:5, height:5}}}
        className="m-7 rounded-xl"
      />
      <Link href="/causes" className="text-white p-2 bg-pinktober-dark rounded-lg text-lg font-bold active:opacity-70">
        Découvrir les causes
      </Link>

      <Link href="/(drawer)/tabs/fruit" className="dark:text-black dark:bg-zinc-300 px-2 py-1 mt-2 rounded-lg text-lg font-bold active:opacity-70">Tabs</Link>
    </View>

  );
}
