import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Feather name="menu" size={24} color="#3A697B" />
        <FontAwesome5 name="bell" size={24} color="#3A697B" />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.stockTab}>
          <View style={[styles.tab, styles.selectedTab]}>
            <Text style={styles.tabText}>국내 주식</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabText}>해외 주식</Text>
          </View>
        </View>
        <View style={styles.kospiWrap}>
          <View style={styles.kospiContainer}>
            <Text style={styles.kospiText}>코스피</Text>
            <Text style={styles.kospiValue}>3,232.53</Text>
            <Text style={styles.kospiRate}>▲ 22.22 1.12%</Text>
            <Image
              source={require("./assets/chart_ex.png")}
              style={{ width: 130, height: 100 }}
            />
          </View>
          <View style={styles.kospiContainer}>
            <Text style={styles.kospiText}>코스닥</Text>
            <Text style={styles.kospiValue}>732.53</Text>
            <Text style={styles.kospiRate}>▲ 8.22 1.12%</Text>
            <Image
              source={require("./assets/chart_ex.png")}
              style={{ width: 130, height: 100 }}
            />
          </View>
        </View>
        <View style={styles.stockList}>
          <Text>종목 리스트</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 33,
  },
  body: {
    flex: 9,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  kospiWrap: {
    flex: 3.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  stockTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#EEE",
    width: "90%",
    borderRadius: 7,
    margin: 20,
    padding: 5,
  },
  selectedTab: {
    flex: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6CB8D6CC",
    borderRadius: 7,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  tabText: {
    fontSize: 16,
    color: "#fff",
  },
  kospiWrap: {
    flex: 2.5,
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  kospiContainer: {
    flex: 1,
    backgroundColor: "#84E5D5",
    borderRadius: 20,
    padding: 15,
  },
  kospiText: {
    fontSize: 15,
    color: "#fff",
    marginBottom: 10,
  },
  kospiValue: {
    fontSize: 20,
    color: "red",
  },
  kospiRate: {
    fontSize: 12,
    color: "red",
    marginBottom: 7,
  },

  stockList: {
    flex: 6,
  },
});
