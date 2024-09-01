import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { fecthServiceRequests } from "./api/call";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[{ color: textColor }]}>
      {item.user_data.display_name} - {item.user_data.phone}
    </Text>
    <Text style={[styles.title, { color: textColor }]}>{item.label}</Text>
  </TouchableOpacity>
);

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
    console.log(item);
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text>Error</Text>}
      {isSuccess && (
        <FlatList
          data={sreqs.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
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
