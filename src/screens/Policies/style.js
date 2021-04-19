import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
    container:{
        flex:1
    },
    policy: {
        paddingHorizontal: 20,
        backgroundColor: Colors.themeColor2,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 20,
        flexDirection: 'row',
        elevation: 10,
        shadowColor: 'rgba(0,0,0,0.35)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      label:{
          color:Colors.themeColor1,
          fontSize:16,
          fontFamily: Colors.font
      },
      arrowDown:{
          width:15,
          height:15,
          resizeMode:'contain'
      }
})