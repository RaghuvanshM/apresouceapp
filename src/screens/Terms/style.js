import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
    container:{
        flex:1
    },
    imageSection:{
        width:'100%',
        height:250,
        paddingHorizontal:40
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    section1:{
        paddingHorizontal:20,
    },
    heading:{
        color:Colors.themeColor1,
        fontSize:19,
        fontFamily: Colors.font
    },
    label:{
        marginTop:20,
        color:Colors.themeColor1,
        fontSize:16,
        fontFamily: Colors.font
    },
    section2:{
        paddingVertical:20
    }
})