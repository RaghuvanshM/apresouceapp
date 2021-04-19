import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor2,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  circleIcon: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 14,
    marginTop: 10,
  },
  containerBottom: {
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  line: {
    width: '100%',
    height: 20,
  },
  redCircle: {
    width: 90,
    height: 90,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.7,
    backgroundColor: Colors.themeColor1,
  },
  label1:{
    color:Colors.themeColor2,
    fontSize:12,
    marginTop:5
  }
});
