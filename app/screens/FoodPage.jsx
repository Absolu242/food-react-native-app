import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { CartCountContext } from "../context/CartCountContext";
import { COLORS, SIZES } from "../constants/theme";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;

  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [preference, setPreference] = useState("");
  //const { cartCount, setCartCount } = useContext(CartCountContext);

  return (
    <View
      style={{
        backgroundColor: COLORS.lightWhite,
        height: SIZES.height,
      }}
    >
      <View>
        <Image
          source={{ uri: item.imageUrl[0] }}
          style={{
            width: SIZES.width,
            height: SIZES.height / 4,
            borderBottomRightRadius: 30,
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={styles.shareBtn}
        >
          <MaterialCommunityIcons
            name="share-circle"
            size={30}
            color={COLORS.lightWhite}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={{ position: "absolute", bottom: 25, right: 10 }}
        >
          <View style={styles.restBtn}>
            <Text
              style={{
                color: COLORS.lightWhite,
                fontFamily: "bold",
              }}
            >
              Open the Store
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, { color: COLORS.primary }]}>
            ${(item.price + totalPrice) * count}
          </Text>
        </View>

        <Text style={styles.small}>{item.description}</Text>

        <FlatList
          data={item.foodTags}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          style={{ marginTop: 5 }}
          horizontal
          scrollEnabled
          renderItem={({ item }) => (
            <View style={styles.tags}>
              <Text
                style={{
                  paddingHorizontal: 4,
                  color: COLORS.lightWhite,
                }}
              >
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default FoodPage;

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 12,
    alignItems: "center",
    zIndex: 999,
    position: "absolute",
    top: SIZES.xxLarge,
  },

  title: {
    fontSize: 22,
    fontFamily: "medium",
    color: COLORS.balck,
  },

  shareBtn: {
    marginright: 10,
    alignItems: "center",
    right: 10,
    zIndex: 999,
    position: "absolute",
    top: SIZES.xxLarge,
  },
  restBtn: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginright: 10,
  },
  container: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  small: {
    fontSize: 13,
    fontFamily: "regular",
    color: COLORS.gray,
    textAlign: "justify",
  },
  tags: {
    right: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
});
