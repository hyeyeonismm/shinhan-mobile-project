import { StyleSheet, Text, View } from "react-native";
const KospiContainer = ({ text, value, rate, who1, who2, who3 }) => {
  return (
    <View style={styles.kospiContainer}>
      <Text style={styles.kospiText}>{text}</Text>
      <Text style={[styles.kospiValue, styles.red]}>{value}</Text>
      <Text style={[styles.kospiRate, styles.red]}>{rate}</Text>
      <View style={styles.kospiWhoWrap}>
        <Text style={styles.kospiWho}>개인</Text>
        <Text style={styles.kospiWho}>외국인</Text>
        <Text style={styles.kospiWho}>기관</Text>
      </View>
      <View style={styles.kospiWhoWrap}>
        <Text style={[styles.kospiWho, styles.blue]}>{who1}</Text>
        <Text style={[styles.kospiWho, styles.red]}>{who2}</Text>
        <Text style={[styles.kospiWho, styles.red]}>{who3}</Text>
      </View>
    </View>
  );
};
export default KospiContainer;
const styles = StyleSheet.create({
  kospiContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 15,
    shadowColor: "#343434",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  kospiText: {
    fontSize: 15,
    color: "#000",
    marginBottom: 10,
  },
  kospiValue: {
    fontSize: 20,
  },
  kospiRate: {
    fontSize: 12,
    marginBottom: 15,
  },
  kospiWhoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  kospiWho: {
    fontSize: 12,
    color: "#808080",
  },
  kospiContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 15,
    shadowColor: "#343434",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  kospiText: {
    fontSize: 15,
    color: "#000",
    marginBottom: 10,
  },
  kospiValue: {
    fontSize: 20,
  },
  kospiRate: {
    fontSize: 12,
    marginBottom: 15,
  },
  kospiWhoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  kospiWho: {
    fontSize: 12,
    color: "#808080",
  },
  red: {
    color: "#CB0B37",
  },
  blue: {
    color: "#007AFF",
  },
});
