import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    padding: 10,
    position: "relative",
    paddingLeft: 36,
    marginVertical: 16,
  },
  text: {
    color: "#000000",
    fontSize: 12,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 15,
    position: "absolute",
    left: 12,
    top: 25,
  },
});

export default styles;
