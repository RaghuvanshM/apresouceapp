import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchBox: {
    backgroundColor: Colors.themeColor2,
    flexDirection: 'row',
    height: 55,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.themeColor1,
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
    fontSize: 18,
    fontFamily: Colors.font
  },
  imageSection: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: 'hidden',
    backgroundColor: '#e5e5e5',
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
  },
  customerServiceImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  query: {
    paddingHorizontal: 20,
    backgroundColor: Colors.themeColor2,
    paddingVertical: 25,
    marginBottom: 10,
    borderRadius: 25,
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'rgba(0,0,0,0.35)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  label:{
      color:Colors.themeColor1,
      fontSize:18,
      fontFamily: Colors.font
  },
  arrowDown:{
      width:15,
      height:15,
      resizeMode:'contain'
  }
});
