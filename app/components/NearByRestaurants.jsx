import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import uidata from "../constants/uidata";
import StoreComponent from "./StoreCompon";
import { useNavigation } from "@react-navigation/native";

const NearByRestaurants = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginLeft: 12 }}>
      <FlatList
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={({ item }) => (
          <StoreComponent item={item} onPress={() => {}} />
        )}
      />
    </View>
  );
};

export default NearByRestaurants;

const styles = StyleSheet.create({});
