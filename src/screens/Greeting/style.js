import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  img: {
    width: 200,
    height: 200,
    resizeMode:'contain'
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  txt: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  section2: {
    height: 100,
    justifyContent: "center",
  },
  getBtn: {
    width: "90%",
    marginBottom: -10,
  },
});
