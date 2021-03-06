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
    justifyContent: "center",
    paddingHorizontal:30
  },
  section2: {
    height: 60,
    marginBottom:10,
    justifyContent: "center",
  },
  getBtn: {
    width: "90%",
    marginBottom: -10,
  },
  img: {
    width: 200,
    height: 200,
  },
  widget: {
    borderWidth: 1,
    borderColor: Colors.themeColor1,
    borderRadius: 100,
    paddingVertical: 13,
    paddingHorizontal: 20,
    flexDirection: "row",
    width:'80%',
    marginTop:50,
    width:'80%'
  },
  textbox: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 16,
    paddingVertical: 0,
    margin: 0,
    alignSelf:'center'
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
    marginTop:50
  },
  label2:{
    color:Colors.themeColor1,
    fontSize:15,
    fontFamily:Colors.font,
    textAlign:'center',
    marginTop:10
  },
  changeNumberSection:{
      width:'80%',
      flexDirection:'row',
      marginVertical:15
  },
  label3:{
    color:Colors.themeColor1,
    fontSize:15,
    fontFamily:Colors.font,   
  }
});
