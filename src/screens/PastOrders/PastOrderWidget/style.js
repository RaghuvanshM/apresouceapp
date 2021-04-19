import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "#707070",
    paddingHorizontal: 15,
    marginBottom: 30,
    alignSelf: "center",
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 5,
    backgroundColor: "#fff",
    elevation: 10,
  },
  section1: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#707070",
    paddingVertical: 8,
  },
  section2: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  label1: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 17,
  },
  label2: {
    color: "#5c370b",
    fontSize: 14,
    fontFamily: Colors.font,
    fontWeight: "300",
    alignSelf: "flex-end",
  },
  imageContainer: {
    width: 100,
    height: 160,
    borderRadius: 10,
    backgroundColor: "#e5e5e5",
  },
  name: {
    color: Colors.themeColor1,
    fontSize: 20,
    fontFamily: Colors.font,
  },
  status: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 16,
  },
  deliveryDate: {
    color: "#60000f",
    fontSize: 12,
    fontFamily: Colors.font,
  },
  units: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 17,
    marginTop: 5,
  },
  unit: {
    marginTop: 3,
    color: "#60000f",
    fontSize: 17,
    fontFamily: Colors.font,
    borderWidth: 1,
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: "#b5b2b2",
    borderRadius: 15,
  },
  totalLabel: {
    color: Colors.themeColor1,
    fontSize: 17,
    fontFamily: Colors.font,
  },
  total: {
    color: "#707070",
    fontSize: 16,
    fontFamily: Colors.font,
    marginTop: 3,
  },
  shadowView: {
    width: "100%",
    height: 10,
    backgroundColor: "red",
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
