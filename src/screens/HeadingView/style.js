import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    width:'80%',
    alignSelf:'center',
    flexDirection: 'row'
  },
  label: {
    color: Colors.themeColor1,
    fontSize:22,
    fontFamily: Colors.font,
    paddingHorizontal:10
  },
  line:{
      width:'100%',
      height:20
  }
});
