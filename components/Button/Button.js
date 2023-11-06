import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";

const StyledButton = ({theme, title, onPress}) => {
  const buttonStyle = themeStyles[theme]?.button;
  const textStyle = themeStyles[theme]?.text;
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#c0c0c0",
    width: "auto",
    flexGrow: 1,
    padding: 10,
    margin: 6,
    borderRadius: 8,
  },
  text: {
    color: "#000",
    textAlign: "center",
  },
});

const themeStyles = StyleSheet.create({
  red: {
    button: {backgroundColor: "#eba4a4"},
    text: {color: "#dc143c"},
  },
  blue: {
    button: {backgroundColor: "#DCF2FB"},
    text: {color: "#3A697B"},
  },
  gray: {
    button: {backgroundColor: "#3A697B"},
    text: {color: "#DCF2FB"},
  },
  category: {
    button: {flex: 0.8, padding: 15, backgroundColor: "#fff"},
    text: {alignSelf: "flex-start", marginTop: 8, color: "#392f31", fontSize: 16, fontWeight: 700},
  },
});

export default StyledButton;
