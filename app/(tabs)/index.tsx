import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1  justify-center items-center" >
      <Text className="text-center font-bold text-5xl color-primary">welcome</Text>
      <Link href="/onboarding">Onboarding</Link> 
      <Link href="/movie/avegers"> Avengers Movie</Link> 
    </View>
  );
}
