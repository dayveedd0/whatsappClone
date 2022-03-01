import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    marginBottom: 5,
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    alignItems: "flex-start",
    marginHorizontal: 5,
    borderRadius: 50,
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icons: {
    marginHorizontal: 5,
  },
});

export default styles;
