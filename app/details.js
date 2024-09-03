import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const item = useLocalSearchParams();
  const { id, created_at, label, desc, images, timeAgo, user_data } = item;
  const user = JSON.parse(user_data);

  return (
    <View>
      <Text>{label}</Text>
      <Text>{user.display_name}</Text>
    </View>
  );
}
