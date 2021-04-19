import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  searchSection: {
    justifyContent:'center',
    paddingHorizontal:20,
    paddingVertical:20
  },
  searchBox: {
    backgroundColor: Colors.themeColor2,
    flexDirection: 'row',
    height: 45,
    borderRadius: 100,
    borderWidth:1,
    borderColor:Colors.themeColor1
  },
  searchIconContainer: {
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  magnifier: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  searchTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchText: {
    width: '100%',
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 18,
  },
  showMoreImg:{
    width:50,
    height:50,
    resizeMode:'contain',
    marginTop:10
  },
  showMoreLabel:{
    fontSize:18,
    color:'#707070',
    fontFamily: Colors.font
  },
  btn:{
    width: "90%",
    marginBottom: 10,
  }
});
