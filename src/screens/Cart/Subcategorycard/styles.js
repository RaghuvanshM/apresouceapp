import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default  StyleSheet.create({
    container: {
      width: "50%",
    },
    container1: {
      flex: 1,
      backgroundColor: "#fff",
      shadowColor: "rgba(0,0,0,0.5)",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 5,
      marginTop: 10,
    },
    label: {
      color: Colors.themeColor1,
      fontFamily: Colors.font,
      textAlign: "center",
      fontSize: 18,
      fontWeight: "400",
    },
    label1: {
      color: Colors.themeColor1,
      textAlign: "center",
      fontSize: 14,
      fontWeight: "400",
      paddingHorizontal: 10,
    },
    imgContainer: {
      width: "100%",
    },
    proImg: {
      width: "100%",
      aspectRatio: 0.75 / 1,
      backgroundColor: "#e5e5e5",
    },
    labelContainer: {
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
  });
  