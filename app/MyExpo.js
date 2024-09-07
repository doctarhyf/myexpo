import { useQuery } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { fecthServiceRequests } from "../api/calls";
import Item from "../comps/Item";
import * as Icon from "react-native-feather";

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
        pathname: "/details",
        params: { ...item, user_data: JSON.stringify(item.user_data) },
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
        <View className=" flex-1  ">
          <FlatList
            data={sreqs.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />

          <Link
            push
            href="/home"
            className=" bg-sky-400 flex justify-center items-center  "
          >
            <View className=" flex flex-row bg-red-400   items-center justify-between mx-0   ">
              <Icon.CloudRain width={25} height={25} stroke={"red"} />
              <Text className=" p-4 w-fit  text-3xl text-center m-4 ">
                Go to Home
              </Text>
            </View>
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
