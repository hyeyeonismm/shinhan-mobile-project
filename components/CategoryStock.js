import {StyleSheet, Text, View} from "react-native";
import StyledButton from "./Button/Button";

const CategoryStock = ({rank, title, percentage}) => {
  return (
    <View style={styles.row}>
      <Text style={[styles.rank]}>{rank}</Text>
      <StyledButton theme="category" title={title} />

      <Text style={[styles.text]}>{percentage}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,

    borderTopWidth: 0.3,
    borderColor: "#ddd",
  },
  rank: {
    marginTop: 10,
    marginLeft: 10,
    color: "#4594f9",
    fontWeight: 700,
    lineHeight: 35,
    fontSize: 18,
  },

  text: {
    marginRight: 20,
    marginTop: 10,
    width: 70,
    height: 35,
    textAlign: "center",
    lineHeight: 35,
    color: "red",
    backgroundColor: "#fceced",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default CategoryStock;
