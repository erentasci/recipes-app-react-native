import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 60,
    marginTop: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: 500,
    marginVertical: 10,
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    objectFit: "contain",
    marginBottom: 10,
  },
  bigTitle: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 40,
    marginTop: 30,
  },
});

export default styles;
