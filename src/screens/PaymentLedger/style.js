import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
    container:{
        flex:1
    },
    section1:{
        paddingHorizontal:10,
        paddingVertical:20,
    },
    label:{
        color:Colors.themeColor1,
        fontSize:16,
        fontFamily: Colors.font
    },
    picker:{
        borderWidth:0.5,
        borderColor:Colors.themeColor1,
        width:'100%',
        height:35,
        borderRadius:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    arrow:{
        width:15,
        height:15,
        marginRight:10,
        resizeMode:'contain'
    },
    section2:{
        width:'99.5%',
        borderWidth:0.8,
        borderRadius:10,
        flexDirection:'row',
        alignSelf:'center',
        overflow:'hidden'
    },
    tab:{
        flex:1,
        alignItems:'center',
        height:80,
        justifyContent:'center',
        backgroundColor:'#fff',
    },
    selectedTab:{
        flex:1,
        alignItems:'center',
        height:80,
        justifyContent:'center',
        backgroundColor:Colors.themeColor1,
        borderRadius:10
    },
    tabLabel:{
        textAlign:'center',
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:16, 
    },
    section3:{
        flex:1,
        backgroundColor:'#fff'
    },
    section4:{
        height:120,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    transaction:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:8,
        borderBottomWidth:1,
        borderColor:'#e5e5e5'
    },
    time:{
        color:Colors.themeColor1,
        fontFamily: Colors.font,
        fontSize:20,
        fontWeight:'500'
    },
    desc:{
        color:'#60000f',
        fontSize:14,
        fontFamily: Colors.font
    },
    amount:{
        color:Colors.themeColor1,
        fontSize:20,
        fontFamily: Colors.font,
        marginLeft:70
    },
    type:{
        color:'green',
        fontSize:15,
        fontFamily: Colors.font,
        marginLeft:10
    }
})