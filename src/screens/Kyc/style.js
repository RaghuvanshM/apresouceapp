import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    flex: 1,
    paddingHorizontal: 60,
    paddingTop: 60,
  },
  label: {
    color: Colors.themeColor1,
    fontSize: 19,
    fontFamily: Colors.font
  },
  widget: {
    borderWidth: 1,
    borderColor: Colors.themeColor1,
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  label1: {
    color: Colors.themeColor1,
    fontSize: 16,
    fontFamily: Colors.font
  },
  arrowRight: {
    width: 16,
    height: 16,
  },
  btnSection: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  textbox:{
      color:Colors.themeColor1,
      fontFamily: Colors.font,
      fontSize:16,
      paddingVertical:0,
      margin:0,
  },
  successIcon:{
    width:100,
    height:100,
  },
  label4: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 16,
    textAlign:'center',
    marginVertical:40,
  }, popup: {
    alignItems: "center",
  },
});
