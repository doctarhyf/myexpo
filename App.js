import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  async function loadData() {
    const d = await axios.get("https://www.yahoo.com/");
    console.log(d);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>this is cool!</Text>
      <Text>his is axio {JSON.stringify(axios.get)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
