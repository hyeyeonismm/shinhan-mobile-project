import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import {FontAwesome5, MaterialIcons, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import Container from "./Container";
import StyledButton from "./components/Button/Button";
import StockModal from "./components/StockModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(false);

  const openModalWithTitle = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Feather name="menu" size={24} color="#343434" />
        <FontAwesome5 name="bell" size={24} color="#343434" />
      </View>

      <ScrollView style={{flex: 1}} contentContainerStyle={styles.body}>
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
            <Text style={[styles.kospiValue, styles.red]}>2,368.34</Text>
            <Text style={[styles.kospiRate, styles.red]}>▲25.22 1.08%</Text>
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
            <Text style={[styles.kospiValue, styles.red]}>782.05</Text>
            <Text style={[styles.kospiRate, styles.red]}>▲9.21 1.19%</Text>
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
            <LinearGradient colors={["#6CB0D6", "#6E6CD6"]} start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={[styles.stockQuickNavTab]}>
              <Text style={[styles.stockQuickNavText, styles.tabText]}>계좌 잔고</Text>
              <MaterialIcons name="account-balance" size={19} color="#ffffff" />
            </LinearGradient>

            <LinearGradient colors={["#6CB0D6", "#6E6CD6"]} start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={[styles.stockQuickNavTab]}>
              <Text style={[styles.stockQuickNavText, styles.tabText]}>이체</Text>
              <MaterialCommunityIcons name="bank-transfer" size={28} color="#ffffff" />
            </LinearGradient>

            <LinearGradient colors={["#6CB0D6", "#6E6CD6"]} start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={[styles.stockQuickNavTab]}>
              <Text style={[styles.stockQuickNavText, styles.tabText]}>보유 주식</Text>
              <Ionicons name="wallet-outline" size={20} color="#ffffff" />
            </LinearGradient>
          </View>

          <View style={styles.recentStock}>
            <View style={styles.recentStockHeader}>
              <Text style={styles.recentStockHeaderText}>최근 본 종목</Text>
            </View>
            <View style={styles.recentStockContainer}>
              <Image source={require("./assets/logo1.png")} style={{width: 40.5, height: 41}} />
              <StyledButton theme="list" title="삼성전자" onPress={() => openModalWithTitle("삼성전자")} />

              <Text style={[styles.blue]}>69,600</Text>
              <Text style={[styles.recentStockRate, styles.blue]}>-0.14%</Text>
            </View>
            <View style={styles.recentStockContainer}>
              <Image source={require("./assets/logo3.png")} style={{width: 40.5, height: 41}} />
              <StyledButton theme="list" title="카카오" onPress={() => openModalWithTitle("카카오")} />

              <Text style={[styles.red]}>41,300</Text>
              <Text style={[styles.recentStockRate, styles.red]}>+7.13%</Text>
            </View>
            <View style={styles.recentStockContainer}>
              <Image source={require("./assets/logo2.png")} style={{width: 40.5, height: 41}} />
              <StyledButton theme="list" title="신한지주" onPress={() => openModalWithTitle("신한지주")} />
              <Text style={[styles.red]}>34,900</Text>
              <Text style={[styles.recentStockRate, styles.red]}>+1.16%</Text>
            </View>
          </View>
        </View>
        <StockModal modalOpen={modalOpen} setModalOpen={setModalOpen} title={modalTitle} />
        <Container />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
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
    flexGrow: 1,
    width: "90%",
    alignItems: "center",
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
  recentStockRate: {
    marginLeft: 12,
  },
  stockList: {
    flex: 6,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#343434",
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
    shadowColor: "#343434",
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
  recentStockHeader: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  recentStockHeaderText: {
    fontSize: 16,
    color: "#343434",
  },
  recentStockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
