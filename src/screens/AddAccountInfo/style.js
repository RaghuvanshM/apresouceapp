import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section1: {
    flex: 1,
    alignItems: "center",
  },
  section2: {
    height: 100,
    justifyContent: "center",
  },
  getBtn: {
    width: "90%",
    marginBottom: -20
  },
  imageSection:{
    width:'100%',
    height:350,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
    borderBottomWidth:1,
    borderBottomColor:'#e5e5e5'
  },
  img: {
    width: '100%',
    height:'100%',
    resizeMode:'contain'
  },
  widget: {
    borderWidth: 1,
    borderColor: Colors.themeColor1,
    borderRadius: 100,
    paddingVertical: 13,
    paddingHorizontal: 20,
    flexDirection: "row",
    width:'80%',
    marginTop:10,
    width:'80%'
  },
  textbox: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 15,
    paddingVertical: 0,
    margin: 0,
  },
  arrowRight: {
    width: 16,
    height: 16,
  },
  label1:{
    color:Colors.themeColor1,
    fontSize:20,
    fontFamily:Colors.font,
    textAlign:'center',
    marginTop:-17
  },
  label2:{
    color:Colors.themeColor1,
    fontSize:14,
    fontFamily:Colors.font,
    textAlign:'center',
    marginTop:5
  },
  label3:{
    color:Colors.themeColor1,
    fontSize:14,
    fontFamily:Colors.font,   
    marginLeft:5
  },
  checkboxSection:{
    paddingHorizontal:60,
    marginTop:16,
    flexDirection:'row',
  }
});
