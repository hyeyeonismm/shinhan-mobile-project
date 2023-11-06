import React, {useEffect, useRef, useState} from "react";
import {Animated, TextInput, StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import StyledButton from "./components/Button/Button";
import CategoryStock from "./components/CategoryStock";
import Footer from "./components/Footer";

function Container() {
  const animation = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(animation, {
  //       toValue: 350,
  //       duration: 6000,
  //       useNativeDriver: true,
  //     })
  //   ).start();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, gap: 10, marginTop: 20}}>
        <Text style={{color: "#3A697B", fontSize: 18, fontWeight: 700, marginBottom: 5}}>요즘 뜨고 있는 카테고리</Text>
        <View style={{marginBottom: 10}}>
          <CategoryStock rank="1" title="배터리제조" percentage="+15.9%" />
          <CategoryStock rank="2" title="조선사" percentage="+15.1%" />
          <CategoryStock rank="3" title="웹툰" percentage="+7.8%" />
          <CategoryStock rank="4" title="무역" percentage="+6.8%" />
          <CategoryStock rank="5" title="게임플랫폼" percentage="+5.6%" />
        </View>
      </View>

      <View style={{gap: 10, flex: 1, marginTop: 10}}>
        <Text style={{color: "#3A697B", fontSize: 18, fontWeight: 700, marginBottom: 5}}>찾는 주식이 있다면</Text>
        <View style={{flexDirection: "row", backgroundColor: "#f2f2f2", borderRadius: 8, marginBottom: 30}}>
          <AntDesign name="search1" size={24} color="#3A697B" style={{marginTop: 5, marginLeft: 7}} />
          <TextInput style={styles.searchBar} placeholder="주식 검색하기" />
        </View>
      </View>

      <View style={{flex: 1, marginTop: 10}}>
        <Text style={{color: "#3A697B", fontSize: 18, fontWeight: 700, marginBottom: 10}}>아직 뭘 살지 모르겠다면</Text>
        <View>
          <Animated.View
            style={{
              ...styles.animatedContainer,
              transform: [{translateX: animation}],
            }}
          >
            <StyledButton theme="blue" title="#코스피" />
            <StyledButton theme="blue" title="#은행" />
            <StyledButton theme="red" title="반도체" />
            <StyledButton theme="red" title="#시멘트" />
            <StyledButton theme="red" title="#동전주" />
            <StyledButton theme="" title="#대마초" />
            <StyledButton theme="" title="#배당주" />
            <StyledButton theme="red" title="#인버스" />
            <StyledButton theme="" title="#KOSDAQ" />
            <StyledButton theme="blue" title="#10대관심TOP" />
            <StyledButton theme="red" title="#매출20조클럽" />
            <StyledButton theme="" title="#8만원대기업" />
          </Animated.View>
        </View>
      </View>
      <Footer />
    </View>
  );
}

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    gap: 10,
    alignSelf: "flex-start",
  },

  animatedContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  searchBar: {
    width: 280,
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 8,
  },
});
