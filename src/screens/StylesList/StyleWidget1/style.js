import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#707070",
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: "#fff",
    elevation: 10,
    marginBottom: 15,
    flexDirection: "row",
    marginTop: 2,
  },
  article: {
    color: "#777",
    fontSize: 13,
    fontFamily: Colors.font,
  },
  title: {
    color: Colors.themeColor1,
    fontSize: 15,
    fontFamily: Colors.font,
  },
  sizes: {
    color: "#707070",
    fontSize: 12,
    fontFamily: Colors.font,
  },
  colors: {
    flexDirection: "row",
    marginTop: 5,
  },
  color: {
    width: 16,
    height: 16,
    borderRadius: 100,
    overflow: "hidden",
  },
  moreColor: {
    color: Colors.themeColor1,
    fontSize: 11,
    fontFamily: Colors.font,
  },
  colorContainer: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: "#707070",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    overflow: "hidden",
    marginRight: 3,
  },
  priceContainer: {
    borderBottomWidth: 0.6,
    borderColor: Colors.themeColor1,
  },
  price: {
    paddingVertical: 2,
    fontSize: 14,
    fontFamily: Colors.font,
  },
  strikePrice: {
    fontSize: 9,
    fontFamily: Colors.font,
    textDecorationLine: 'line-through'
  },
  marginLabel: {
    color: "#000",
    fontSize: 13,
    fontFamily: Colors.font,
  },
  label1: {
    color: Colors.themeColor1,
    fontSize: 17,
    fontFamily: Colors.font,
  },
  label2: {
    color: "#5c370b",
    fontSize: 14,
    fontFamily: Colors.font,
    alignSelf: "flex-end",
  },
  imageContainer: {
    width: 140,
  },
  productImg: {
    width: "100%",
    aspectRatio: 0.75 / 1,
    backgroundColor: "#e5e5e5",
  },
  name: {
    color: Colors.themeColor1,
    fontSize: 20,
    fontFamily: Colors.font,
  },
  status: {
    color: Colors.themeColor1,
    fontSize: 16,
    fontFamily: Colors.font,
  },
  deliveryDate: {
    color: "#60000f",
    fontSize: 12,
    fontFamily: Colors.font,
  },
  units: {
    color: Colors.themeColor1,
    fontSize: 17,
    fontFamily: Colors.font,
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
});
