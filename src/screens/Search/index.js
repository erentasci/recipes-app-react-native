import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input />
    </SafeAreaView>
  );
};

export default React.memo(Search);
