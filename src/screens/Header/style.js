import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.themeColor1,
  },
  iosMargin: {
    height: 40,
  },
  header: {
    height: 60,
    flexDirection: 'row',
  },
  backContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backIcon:{
    width:19,
    height:19
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title:{
    color:Colors.themeColor2,
    fontFamily: Colors.font,
    fontSize:18
  },
  optionsContainer:{
    flexDirection:'row',
  },
  icon:{
    width:15,
    height:15
  },
  option:{
    justifyContent:'center',
    marginRight:15
  }
});