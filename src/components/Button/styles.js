import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#129575",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: 16,
    height: 14,
    marginLeft: 15,
  },
});

export default styles;
