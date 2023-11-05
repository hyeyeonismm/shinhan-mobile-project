import {ScrollView, TextInput, StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import StyledButton from "./components/Button/Button";

function Container() {
  return (
    <View style={styles.container}>
      <View style={{gap: 10}}>
        <Text style={{color: "#3A697B", fontSize: 18, fontWeight: 700, marginLeft: 5}}>찾는 주식이 있다면</Text>
        <View style={{flexDirection: "row", backgroundColor: "#f2f2f2", borderRadius: 8, marginBottom: 30}}>
          <AntDesign name="search1" size={24} color="#3A697B" style={{marginTop: 5, marginLeft: 5}} />
          <TextInput style={styles.searchBar} placeholder="주식 검색하기" />
        </View>
      </View>
      <View style={{gap: 10}}>
        <Text style={{color: "#3A697B", fontSize: 18, fontWeight: 700, marginLeft: 5}}>아직 뭘 살지 모르겠다면</Text>
        <View style={{flexDirection: "row", flexWrap: "wrap", gap: 10}}>
          <StyledButton theme="blue" title="#코스피" />
          <StyledButton theme="" title="은행" />
          <StyledButton theme="red" title="#코스닥" />
          <StyledButton theme="" title="반도체" />
          <StyledButton theme="blue" title="#시멘트" />
          <StyledButton theme="" title="#동전주" />
          <StyledButton theme="red" title="#대마초" />
        </View>
      </View>
    </View>
  );
}

export default Container;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 10,
    alignSelf: "flex-start",
  },

  searchBar: {
    width: 280,
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 8,
  },
});
