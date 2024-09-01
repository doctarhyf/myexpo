import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { fecthServiceRequests } from "../api/calls";
import Item from "../comps/Item";
import { Link, router } from "expo-router";

export default function MyExpo() {
  const {
    data: sreqs,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["sreqs"],
    queryFn: fecthServiceRequests,
  });

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    const handlePress = () => {
      router.push({
        pathname: "/item",
        params: { ...item },
      });
    };

    return (
      <Item
        item={item}
        onPress={handlePress}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  useEffect(() => {}, [selectedId]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>Error</Text>}
      {isSuccess && (
        <View>
          <FlatList
            data={sreqs.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />

          <Link push href="/home">
            Go to Home
          </Link>
        </View>
      )}
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
