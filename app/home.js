import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity>
        <Link href="/">
          <Text style={{ padding: 30 }}>Main cool</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
