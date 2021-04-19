import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  emptyCartSection: {
    paddingHorizontal: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section1: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label1: {
    marginTop: 20,
    color: Colors.themeColor1,
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center",
  },
  label2: {
    marginTop: 10,
    color: Colors.themeColor1,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  img: {
    width: 250,
    height: 140,
    resizeMode: "contain",
  },
  section2: {
    backgroundColor: Colors.themeColor1,
    height: 60,
    width: "100%",
    justifyContent:'center'
  },
  label3:{
      color:Colors.themeColor2,
      textAlign:'center',
      alignSelf:'center'
  },
  kycNotification: {
    backgroundColor: "#e5e5e5",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    height: 30,
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  kycNotificationLabel: {
    color: Colors.themeColor1,
    fontSize: 13,
    fontWeight: "300",
  }
});
