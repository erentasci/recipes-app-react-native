import React from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Categories from "../../components/Categories";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={() => navigation.navigate("Search")}>Search </Text> */}
      <Input pressable={true} onPress={() => navigation.navigate("Search")} />
      <Title text="Featured Recipes" />
      <Categories
        categories={["All", "Trending"]}
        selectedCategory="All"
        onCategoryPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
