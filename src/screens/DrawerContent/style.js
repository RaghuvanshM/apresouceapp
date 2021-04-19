import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        backgroundColor:'#f2f2f2',
        paddingVertical:20,
        paddingHorizontal:30,
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.16)',
        elevation:4
    },
    profileImage:{
        backgroundColor:Colors.themeColor1,
        borderRadius:50,
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:'100%',
        height:'100%'
    },
    iosHeader:{
        width:'100%',
        backgroundColor:'#f2f2f2',
        height:40,
    },
    name:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:18,
        marginTop:10,
    },
    custId:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:14,
        marginTop:20        
    },
    join:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:14,
        marginTop:5
    },
    tabSection:{
        flex:1,
        marginHorizontal:30,
    },
    tab:{
        flexDirection:'row',
        paddingVertical:25,
        borderBottomWidth:0.5,
        borderColor:Colors.themeColor1+'60'
    },
    tabIconContainer:{
        justifyContent:'center'
    },
    tabIcon:{
        width:17,
        height:17
    },
    tabLabelContainer:{
        justifyContent:'center',
        flex:1,
        marginLeft:15
    },
    tabLabel:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:16
    }
})