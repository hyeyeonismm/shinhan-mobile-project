import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Linking} from "react-native";

const Footer = () => {
  const onPress = () => {
    Linking.openURL("https://github.com/hyeyeonismm/shinhan-mobile-project.git");
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>신한투자증권</Text>
      <Text style={styles.text}>신한투자증권에서 제공하는 투자 정보는 고객의 투자 판단을 위한 단순참고용일뿐, 투자 제안 및 권유/종목 추천을 위해 작성된 것이 아닙니다.</Text>
      <Text style={{color: "#c0c0c0", marginVertical: 15}}>플랫폼개발부 과제 | 김혜연 | 안정민 |</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>깃허브 바로가기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 30,
    marginBottom: 30,
  },
  logo: {
    fontWeight: "700",
    fontSize: 16,
    color: "#c0c0c0",
    marginBottom: 15,
  },
  text: {
    color: "#c0c0c0",
  },
  linkText: {
    color: "#1B95E0",
    textDecorationLine: "underline",
  },
});

export default Footer;
