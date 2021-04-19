import { StyleSheet, TextBase } from "react-native";
import Colors from "../../utils/Colors";
import { Directions } from "react-native-gesture-handler";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  idContainer: {
    backgroundColor: "#e5e5e5",
    height: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  idLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    color: "#5c370b",
    fontSize: 15,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  btn: {
    color: Colors.themeColor2,
    marginLeft: 40,
    marginTop: 15,
    justifyContent: "center",
  },
  bottomSection: {
    flexDirection: "row",
    backgroundColor: Colors.themeColor1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label7: {
    color: "#fff",
    fontFamily: Colors.font,
    fontSize: 14,
  },
  payLedgerBtn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  section1: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 10,
  },
  shipmentLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 14,
    alignSelf: "flex-end",
    marginBottom: 5
  },
  courierLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 12,
    alignSelf: "flex-end",
    marginBottom:3
  },
  trackLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 12,
    alignSelf: "flex-end",
  },
  trackItem:{
    flexDirection:'row'
  },
  trackItem1:{
    width:40,
    height:80,
    alignItems:'center'
  },
  circle:{
    marginTop:1,
    width:18,
    height:18,
    borderWidth:3.5,
    borderColor:'#21c25d',
    backgroundColor:'#fff',
    borderRadius:100
  },
  line:{
    width:6,
    height:'100%',
    backgroundColor:'#21c25d',
    marginTop:-1
  },
  trackItem2:{
    flex:1,
    height:80
  },
  trackTitle:{
    fontSize:20,
    fontFamily:Colors.font,
    color:'#666'
  },
  trackSubTitle:{
    fontSize:11,
    fontFamily:Colors.font,
    color:Colors.themeColor1
  },
  trackDate:{
    fontSize:11,
    fontFamily:Colors.font,
    color:Colors.themeColor1,
    marginTop:5
  }
});
