import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

const Title = ({ text, style }) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

Title.defaultProps = {
  text: "Default Title",
};

export default React.memo(Title);
