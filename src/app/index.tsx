import { Text, View } from "react-native";
import "../../global.css";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-pinktober text-3xl font-bold">
        🎀 PinkOctobre est prêt !
      </Text>
      <Text className="text-pinktober-dark mt-2 text-lg">
        NativeWind fonctionne ✨
      </Text>
    </View>

  );
}
