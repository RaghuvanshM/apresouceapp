import { StyleSheet } from "react-native";
import Colors from "../../../utils/Colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "#707070",
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: "#fff",
    elevation: 10,
    marginBottom: 15,
    flexDirection: "row",
    marginTop:2
  },
  article: {
    color: "#777",
    fontSize: 13,
    fontWeight: "400",
  },
  title: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 13
  },
  sizes: {
    color: "#707070",
    fontSize: 14,
    marginTop: 10,
  },
  colors: {
    flexDirection: "row",
    marginTop: 10,
  },
  color: {
    width: 21,
    height: 21,
    borderRadius: 100,
    overflow: "hidden",
  },
  moreColor: {
    color: Colors.themeColor1,
    fontSize: 11,
  },
  colorContainer: {
    width: 25,
    height: 25,
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
  price:{
    fontFamily: Colors.font,
      paddingVertical:5,
      fontSize:14,
  },
  marginLabel:{
      color:'#000',
      fontSize:13,
      fontFamily: Colors.font
  },
  label1: {
    color: Colors.themeColor1,
    fontSize: 17,
  },
  label2: {
    color: "#5c370b",
    fontSize: 14,
    fontWeight: "300",
    alignSelf: "flex-end",    
  },
  imageContainer: {
    width:140,        
  },
  productImg:{
    width:'100%',
    aspectRatio:0.75/1,
    backgroundColor: "#e5e5e5",
  },
  name: {
    color: Colors.themeColor1,
    fontSize: 20,
    fontWeight: "500",
  },
  status: {
    color: Colors.themeColor1,
    fontSize: 16,    
  },
  deliveryDate: {
    color: "#60000f",
    fontSize: 12,
    fontWeight: "300",
  },
  units: {
    color: Colors.themeColor1,
    fontSize: 17,    
    marginTop: 5,
  },
  unit: {
    marginTop: 3,
    color: "#60000f",
    fontSize: 13,
    borderWidth: 1,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderColor: "#b5b2b2",
    borderRadius: 12,    
    fontFamily: Colors.font
  },
  edit: {
    marginTop: 3,
    color: Colors.themeColor2,
    backgroundColor:Colors.themeColor1,
    overflow:'hidden',
    fontSize: 14,    
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 12,    
    fontFamily: Colors.font,
  },
  totalLabel: {
    color: Colors.themeColor1,
    fontSize: 17,    
  },
  total: {
    color: "#707070",
    fontSize: 16,
    fontWeight: "300",
    marginTop: 3,
  },
  shadowView: {
    width: "100%",
    height: 10,
    backgroundColor: "red",
  },
  label3:{
    color:'#707070',
    fontSize:12,
    fontFamily: Colors.font
  },
  btn:{
      backgroundColor:'rgba(0,0,0,0.5)',
      flex:1,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20
  },
  btnLabel:{
      color:'#fff',
      fontSize:10,
      fontFamily: Colors.font
  },
  editSelection:{
    color:Colors.themeColor1,
    fontFamily: Colors.font,
    textAlign:'center',
    alignSelf:'center',
    fontSize:17,
    marginBottom:5
  },
  separator:{
    height:1,
    width:150,
    alignSelf:'center',
    backgroundColor:'#60000f',
  },
 
});
