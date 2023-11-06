import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

const RecentStock = ({logo, title, price, rate, onOpenModal}) => {
  const priceStyle = rate.startsWith("-") ? styles.blue : styles.red;
  const rateStyle = rate.startsWith("-") ? styles.blue : styles.red;

  return (
    <View style={styles.recentStockContainer}>
      <Image source={logo} style={{width: 40.5, height: 41}} />
      <TouchableOpacity onPress={onOpenModal}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <Text style={priceStyle}>{price}</Text>
      <Text style={rateStyle}>{rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recentStockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  red: {
    color: "#CB0B37",
  },
  blue: {
    color: "#007AFF",
  },
  title: {
    width: 120,
    alignSelf: "flex-start",
  },
});

export default RecentStock;
