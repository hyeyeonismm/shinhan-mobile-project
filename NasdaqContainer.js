import { StyleSheet, Text, View } from "react-native";
const NasdaqContainer = ({ text, value, rate1, rate2 }) => {
  return (
    <View style={styles.nasdaqContainer}>
      <Text style={styles.nasdaqText}>{text}</Text>
      <Text style={[styles.nasdaqValue, styles.red]}>{value}</Text>
      <Text style={[styles.nasdaqRate, styles.red]}>{rate1}</Text>
      <Text style={[styles.nasdaqRate, styles.red]}>{rate2}</Text>
    </View>
  );
};
export default NasdaqContainer;

const styles = StyleSheet.create({
  nasdaqContainer: {
    width: "90%",
    paddingHorizontal: 15,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  nasdaqValue: {
    fontSize: 15,
    color: "#000",
    width: "33%",
    textAlign: "right",
  },
  nasdaqRate: {
    fontSize: 12,
  },
  red: {
    color: "#CB0B37",
  },
  blue: {
    color: "#007AFF",
  },
});
