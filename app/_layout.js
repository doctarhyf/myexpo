import { router, Stack } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function RootLayout() {
  function onNew() {
    router.push("/new");
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Pressable onPress={onNew}>
              <Text style={{ color: "white" }}>NEW</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="details" />
      <Stack.Screen name="new" options={{ headerTitle: "New Item" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
