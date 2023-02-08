import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || "#512DA8",
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, ...textStyle, color: titleColor || "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#512DA8",
    height: 38,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
