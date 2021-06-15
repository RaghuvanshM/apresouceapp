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
    marginTop:2,
    padding:10
  },
  article: {
    color: "#777",
    fontSize: 13,
    fontFamily: Colors.font
  },
  title: {
    color: Colors.themeColor1,
    fontSize: 18,
    marginTop:5,
    fontFamily: Colors.font
  },
  sizes: {
    color: "#707070",
    fontSize: 14,
    fontFamily: Colors.font
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
    fontFamily: Colors.font
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
    marginTop: 20,
  },
  price:{
      paddingVertical:5,
      fontSize:16,
      fontFamily: Colors.font
  },
  marginLabel:{
      color:'#000',
      fontSize:17,
      fontFamily: Colors.font
  },
  imageSection:{
    flexDirection:'row',
  },
  img: {
    width: '100%',
    height:400,
    backgroundColor: "#e5e5e5",
  },
  mainImage:{
    flex:1,
  },
  listImages:{
    width:100,
    marginLeft:10
  },
  subImage:{
    width:100,
    height:100,
    backgroundColor:'#e5e5e5',
    marginBottom:10
  },
  scroll:{
    height:400
  },
  productImg: {
   width: "100%",
   aspectRatio: .78/ 1,
    backgroundColor: "#e5e5e5",
  },
});
