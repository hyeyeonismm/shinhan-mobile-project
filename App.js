import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import {FontAwesome5, MaterialIcons, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import KospiContainer from "./KospiContainer";
import NasdaqContainer from "./NasdaqContainer";
import Container from "./Container";
import StyledButton from "./components/Button/Button";
import StockModal from "./components/StockModal";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("국내주식");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(false);

  const openModalWithTitle = (title) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const kospi = [
    {
      text: "코스피",
      value: "2,368.34",
      rate: "▲25.22 1.08%",
      who1: "-3,043",
      who2: "1,348",
      who3: "1,634",
    },
    {
      text: "코스닥",
      value: "782.05",
      rate: "▲9.21 1.19%",
      who1: "1,454",
      who2: "-1,184",
      who3: "-454",
    },
  ];

  const nasdaq = [
    {
      text: "다우 산업",
      value: "34,061.32",
      rate1: "▲222.24",
      rate2: "0.66%",
    },
    {
      text: "나스닥 종합",
      value: "13,588.83",
      rate1: "▲183.69",
      rate2: "1.37%",
    },
    {
      text: "상해 종합",
      value: "3,474.90",
      rate1: "▲7.77",
      rate2: "0.22%",
    },
    {
      text: "니케이 225",
      value: "29,357.82",
      rate1: "▲179.08",
      rate2: "0.61%",
    },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
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
          <TouchableOpacity onPress={() => handleTabClick("국내주식")} style={[styles.tab]}>
            <LinearGradient colors={selectedTab === "국내주식" ? ["#6CB0D6", "#6E6CD6"] : ["#eee", "#eee"]} style={[styles.tab, styles.tabPadding]} start={{x: 0, y: 1}} end={{x: 1, y: 1}}>
              <Text style={styles.tabText}>국내 주식</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleTabClick("해외주식")} style={[styles.tab]}>
            <LinearGradient colors={selectedTab === "해외주식" ? ["#6CB0D6", "#6E6CD6"] : ["#eee", "#eee"]} style={[styles.tab, styles.tabPadding]} start={{x: 0, y: 1}} end={{x: 1, y: 1}}>
              <Text style={styles.tabText}>해외 주식</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {selectedTab === "국내주식" ? (
          <View style={styles.kospiWrap}>
            {kospi.map((item, index) => (
              <KospiContainer key={index} {...item} />
            ))}
          </View>
        ) : (
          <View style={styles.nasdaqWrap}>
            {nasdaq.map((item, index) => (
              <NasdaqContainer key={index} {...item} />
            ))}
          </View>
        )}

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
    paddingBottom: 15,
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
    width: "100%",
    borderRadius: 7,
    margin: 20,
    padding: 5,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  tabPadding: {
    width: "100%",
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
  nasdaqWrap: {
    flex: 1.9,
    backgroundColor: "#fff",
    marginBottom: 20,
    shadowColor: "#343434",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
    padding: 5,
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
  },
  stockQuickNav: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  stockQuickNavTab: {
    width: "30%",
    height: 55,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    shadowColor: "#343434",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  recentStockHeader: {
    marginBottom: 10,
  },
  recentStockHeaderText: {
    color: "#3A697B",
    fontSize: 18,
    fontWeight: "700",
  },
  recentStockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});
