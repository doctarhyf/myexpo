import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Page({ navigation }) {
  const item = useLocalSearchParams();
  const { id, created_at, label, desc, images, timeAgo, user_data } = item;
  const user = JSON.parse(user_data);

  React.useEffect(() => {
    console.log(navigation);
  }, [navigation]);

  return (
    <View>
      <Text className="  text-red-500 font-bold text-lg ">{label}</Text>
      <Text>{user.display_name}</Text>
    </View>
  );
}
