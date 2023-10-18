import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={() => navigation.navigate("Search")}>Search </Text> */}
      <Input pressable={true} onPress={() => navigation.navigate("Search")} />
    </SafeAreaView>
  );
};

export default React.memo(Home);
