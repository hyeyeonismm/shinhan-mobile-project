import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet, Text, View, Image} from "react-native";
import {Feather} from "@expo/vector-icons";
import {FontAwesome5, MaterialIcons, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import Container from "./Container";

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
          <LinearGradient colors={["#6CB0D6", "#6E6CD6"]} start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={[styles.tab, styles.selectedTab]}>
            <Text style={styles.tabText}>국내 주식</Text>
          </LinearGradient>

          <LinearGradient colors={["#eee", "#eee"]} start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={[styles.tab]}>
            <Text style={styles.tabText}>해외 주식</Text>
          </LinearGradient>
        </View>

        <View style={styles.kospiWrap}>
          <View style={styles.kospiContainer}>
            <Text style={styles.kospiText}>코스피</Text>
            <Text style={styles.kospiValue}>2,368.34</Text>
            <Text style={styles.kospiRate}>▲25.22 1.08%</Text>
            <View style={styles.kospiWhoWrap}>
              <Text style={styles.kospiWho}>개인</Text>
              <Text style={styles.kospiWho}>외국인</Text>
              <Text style={styles.kospiWho}>기관</Text>
            </View>
            <View style={styles.kospiWhoWrap}>
              <Text style={[styles.kospiWho, styles.blue]}>-3,043</Text>
              <Text style={[styles.kospiWho, styles.red]}>1,348</Text>
              <Text style={[styles.kospiWho, styles.red]}>1,634</Text>
            </View>
          </View>
          <View style={styles.kospiContainer}>
            <Text style={styles.kospiText}>코스닥</Text>
            <Text style={styles.kospiValue}>782.05</Text>
            <Text style={styles.kospiRate}>▲9.21 1.19%</Text>
            <View style={styles.kospiWhoWrap}>
              <Text style={styles.kospiWho}>개인</Text>
              <Text style={styles.kospiWho}>외국인</Text>
              <Text style={styles.kospiWho}>기관</Text>
            </View>
            <View style={styles.kospiWhoWrap}>
              <Text style={[styles.kospiWho, styles.blue]}>1,454</Text>
              <Text style={[styles.kospiWho, styles.red]}>-1,184</Text>
              <Text style={[styles.kospiWho, styles.red]}>-454</Text>
            </View>
          </View>
        </View>

        <View style={styles.stockList}>
          <View style={styles.stockQuickNav}>
            <View style={styles.stockQuickNavTab}>
              <Text style={styles.stockQuickNavText}>계좌 잔고</Text>
              <MaterialIcons name="account-balance" size={19} color="black" />
            </View>
            <View style={styles.stockQuickNavTab}>
              <Text style={styles.stockQuickNavText}>이체</Text>
              <MaterialCommunityIcons name="bank-transfer" size={28} color="black" />
            </View>
            <View style={styles.stockQuickNavTab}>
              <Text style={styles.stockQuickNavText}>보유 주식</Text>
              <Ionicons name="wallet-outline" size={20} color="black" />
            </View>
          </View>
        </View>
        <Container />
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
    backgroundColor: " #FAFAFA",
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
    flex: 1.9,
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  kospiContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 15,
    shadowColor: "#000",
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
    color: "red",
  },
  kospiRate: {
    fontSize: 12,
    color: "red",
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
    color: "red",
  },
  blue: {
    color: "blue",
  },
  stockList: {
    flex: 6,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  stockQuickNav: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
    padding: 15,
  },
  stockQuickNavTab: {
    width: "30%",
    height: 55,
    backgroundColor: "#F2F2F2",

    borderRadius: 10,
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
