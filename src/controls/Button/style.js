import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
    btn: {
      backgroundColor: Colors.themeColor1,
      paddingHorizontal: 30,
      alignSelf: 'center',
      paddingVertical: 17,
      borderRadius: 25,
      shadowColor:'rgba(0,0,0,0.9)',
      shadowOffset:{width:0,height:0},
      shadowRadius:3,
      shadowOpacity:1,
      elevation:5
    },
    label: {
      color: Colors.themeColor2,
      textAlign:'center',
      fontSize: 15,
      fontFamily:Colors.font
    },
  });