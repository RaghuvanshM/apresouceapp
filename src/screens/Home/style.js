import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor2,
  },
  bannerSection: {
    flex: 1,
    height: 180,
    backgroundColor: '#e5e5e5',
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  kycInfoSection: {
    flex: 1,
    backgroundColor: Colors.themeColor2,
    elevation: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0,0,0,0.35)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  kycHeading: {
    color: Colors.themeColor1,
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: Colors.font
  },
  kycLabel: {
    color: Colors.themeColor1,
    fontSize: 13,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily:Colors.font
  },
  categoriesSection: {},
  categories: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  category: {
    width: '25%',
  },
  catLabel: {
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.themeColor1,
    marginTop: 10,
    fontSize: 15,
    fontFamily: Colors.font
  },
  catImage: {
    backgroundColor: '#e5e5e5',
    width: 70,
    height: 70,
    borderRadius: 200,
    alignSelf: 'center',
  },
  trendsSection: {
    marginTop: 10,
  },
  trends: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },
  trend: {
    width: '33%',
  },
  trendImage: {
    backgroundColor: '#e5e5e5',
    width: '95%',
    height: 150,
    alignSelf: 'center',
  },
  occasionsSection: {
    marginTop: 10,
  },
  occasions: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
    flexWrap: 'wrap',
  },
  occasion: {
    width: '25%',
    paddingRight: 5,
    marginTop: 5,
  },
  occImage: {
    backgroundColor: '#e5e5e5',
    width: '100%',
    height: 120,
    alignSelf: 'center',
  },
  redStrip: {
    backgroundColor: Colors.themeColor1,
    paddingVertical: 10,
    shadowColor: 'rgba(0,0,0,0.7)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation:5,
    zIndex: 100,
  },
  redStripLabel: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    color: Colors.themeColor2,
    fontFamily: Colors.font
  },
  buyTheDaySection: {
    marginTop: 10,
  },
  buyTheDays: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },
  buyTheDay: {
    flex: 1,
    paddingHorizontal: 5,
  },
  buyTheDayImage: {
    backgroundColor: '#e5e5e5',
    width: '100%',
    height: 150,
    alignSelf: 'center',
  },
  buyTheDayLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 17,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 7,
  },
  uptoBanner: {
    width: 170,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -5,
  },
  luxury: {
    width: 300,
    height: 120,
    alignSelf: 'center',
    marginVertical: 20,
  },
  uploadKyc: {
    width: 300,
    height: 70,
    alignSelf: 'center',
    marginVertical: 20,
    resizeMode:'contain'
  },
  label10:{
    color:Colors.themeColor1,
    fontFamily: Colors.font,
    alignSelf:'center',
    fontSize:20,
    marginBottom:30
  }
});
