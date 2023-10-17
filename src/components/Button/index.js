import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image
        style={styles.icon}
        source={require("../../../assets/arrowRight.png")}
      />
    </TouchableOpacity>
  );
};

export default React.memo(Button);
