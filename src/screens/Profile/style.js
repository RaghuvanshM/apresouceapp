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
    paddingHorizontal:10,
    justifyContent:'center'
  },
  section2: {
    height: 100,
    justifyContent: "center",
  },
  getBtn: {
    width: "90%",

  },
  img: {
    width: 160,
    height: 160,
    resizeMode:'contain',
    
  },
  widget: {
    borderWidth: 1,
    borderColor: Colors.themeColor1,
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop:5,
    width:'80%'
  },
  textbox: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 16,
    paddingVertical: 0,
    margin: 0,
  },
  arrowRight: {
    width: 16,
    height: 16,
  },
  label1:{
    color:Colors.themeColor1,
    fontSize:25,
    fontFamily:Colors.font,
    textAlign:'center',
    marginTop:10
  },
  label2:{
    color:'#555',
    fontSize:14,
    fontFamily:Colors.font,
    textAlign:'center',
    marginTop:5,
    marginBottom:15
  },
  editBtn:{
    borderWidth:1,
    borderRadius:5,
    marginTop:20,
    width:130,
    alignItems:'center',
    height:40,
    justifyContent:'center'
  },
  editLabel:{
    color:Colors.themeColor1,
    fontFamily:Colors.font,
    fontSize:16
  }
});
