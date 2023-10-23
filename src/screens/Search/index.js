import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import { RecipesContext } from "../../../App";

const Search = () => {
  const { recipes } = React.useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    if (keyword) {
      const filtered = recipes.filter((recipe) =>
        recipe?.name?.toLowerCase()?.includes(keyword?.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes([]);
    }
  }, [keyword]);

  return (
    <SafeAreaView style={styles.container}>
      <Input autoFocus style={styles.input} onChangeText={setKeyword} />
      <FlatList
        data={filteredRecipes}
        numColumns={2}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item, index }) => (
          <Card
            style={index === 0 ? { marginLeft: 24 } : {}}
            title={item?.name}
            servings={item?.num_servings}
            image={item?.thumbnail_url}
            rating={item?.user_ratings?.score}
            author={
              item?.credits?.length
                ? {
                    name: item?.credits[0]?.name,
                    image: item?.credits[0]?.image_url,
                  }
                : null
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Search);
