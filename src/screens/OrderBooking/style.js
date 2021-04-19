import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  order: {
    marginTop: 15,
  },
  orderItem: {
    flexDirection: "row",
    paddingVertical:4,
  },
  orderLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    textAlign:'center',
    fontSize:11
  },
  orderItem1: {
    width:35,
    marginRight:10,
    justifyContent:'center'
  },
  orderItem2: {
    width:100,
    marginRight:10,
    justifyContent:'center'
  },
  orderItem3: {
    flex: 1,
    marginRight:10,
    justifyContent:'center'
  },
  orderItem4: {
    width:40,
    marginRight:10,
    justifyContent:'center'
  },
  orderItem5: {
    width:50,
    justifyContent:'center'
  },
  textbox:{
    width:'100%',
    paddingVertical:6,
    borderWidth:0.7,
    borderColor:'#707070',
    borderRadius:5,
    textAlign:'center',
    fontSize:13,
    fontFamily: Colors.font
  }
});
