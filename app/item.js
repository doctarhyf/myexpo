import { Link, router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Item({}) {
  const item = useLocalSearchParams();

  return (
    <View>
      <Text>Item {JSON.stringify(item)}</Text>
      <Pressable onPress={(e) => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
}
