import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section1: {
    flex: 1,
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
    fontFamily: Colors.font,
  },
  section2: {
    backgroundColor: Colors.themeColor1,
    height: 60,
    width: "100%",
    justifyContent:'center'
  },
  label3:{
      color:Colors.themeColor2,
      fontFamily: Colors.font,
      textAlign:'center',
      alignSelf:'center'
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  tabIcon: { width: 16, height: 16 },
  tabLabel: {
    color: Colors.themeColor2,
    textAlign: "center",
    fontSize: 14,
    marginLeft: 10,
  },
  divider:{
    borderLeftWidth:1,
    borderColor:Colors.themeColor2
  },
  popup: {
    alignItems: "center",
  },
  label4: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 18,
    textAlign:'center',
    marginVertical:40
  },
  successIcon:{
    width:80,
    height:80
  }
});
