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
  numberOfStyles: {
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
  numberOfStylesLabel: {
    color: Colors.themeColor1,
    fontSize: 13,
    fontFamily: Colors.font
  },
  section2: {
    backgroundColor: Colors.themeColor1,
    flexDirection: "row",
    height: 50,
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
    fontFamily: Colors.font,
    marginLeft: 10,
  },
  divider:{
    borderLeftWidth:1,
    borderColor:Colors.themeColor2
  },
  sortPopup:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
  },
  sortTab:{
    width:140,
    height:120,
    backgroundColor:'#fff',
    borderRadius:15,    
    justifyContent:'center',
    alignItems:'center'
  },
  sortImage:{
    width:50,
    height:50,
    resizeMode:'contain'
  },
  sortLabel:{
    color:Colors.themeColor1,
    fontSize:15,
    fontFamily: Colors.font,
    marginTop:5
  },
  sortCloseTab:{
    width:70,
    height:70,
    backgroundColor:Colors.themeColor1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50    
  },
  sortCloseImage:{
    width:20,
    height:20
  }
});
