import React from "react";
import { Text, StyleSheet } from "react-native";

const UnderlinedOption = ({ optionText, highlightWords = [] }) => {
  if (!optionText) return null;

  const regex = new RegExp(`(${highlightWords.join("|")})`, "g");
  return optionText.split(regex).map((part, index) =>
    highlightWords.includes(part) ? (
      <Text key={index} style={styles.underlinedText}>{part}</Text>
    ) : (
      <Text key={index}>{part}</Text>
    )
  );
};

const styles = StyleSheet.create({
  underlinedText: { textDecorationLine: "underline", fontWeight: "bold" },
});

export default UnderlinedOption;