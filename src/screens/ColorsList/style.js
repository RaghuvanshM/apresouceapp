import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section1: {
    flex: 1,
  },
  proId: {
    backgroundColor: "#e5e5e5",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  proIdLabel: {
    color: Colors.themeColor1,
    fontSize: 15,
    fontFamily: Colors.font
  },
  label1: {
    textAlign: "center",
    color: Colors.themeColor1,
    paddingVertical: 5,
    fontSize: 15,
    fontFamily: Colors.font
  },
  imageTab: {
    alignSelf: "flex-start",
    marginRight: 10,
  },
  imageTabImg: {
    width: 70,
    height: 70,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
  },
  imageLabel: {
    color: Colors.themeColor1,
    fontSize: 13,
    textAlign: "center",
    marginTop: 5,
    fontFamily: Colors.font
  },
  thumbSection: {
    marginHorizontal: 10,
    shadowRadius: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 30,
  },
  img: {
    width: "100%",
    height: 400,
    backgroundColor: "#e5e5e5",
  },
  mainImage: {
    flex: 1,
  },
  listImages: {
    width: 100,
    marginLeft: 10,
  },
  subImage: {
    width: 100,
    height: 100,
    backgroundColor: "#e5e5e5",
    marginBottom: 10,
  },
  scroll: {
    height: 400,
  },
  title: {
    color: Colors.themeColor1,
    fontSize: 20,
    fontFamily: Colors.font
  },
  btnSection: {
    flexDirection: "row",
  },
  btn1: {
    alignSelf: "flex-end",
    width:'95%',
    marginRight: 5,
    paddingVertical: 10,
  },
  btn2: {
    marginLeft: 5,
    alignSelf: "flex-start",
    width:'95%',
    paddingVertical: 10,
  },
  btn1Selected: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.themeColor1,
    alignSelf: "flex-end",
    width:'95%',
    marginRight: 5,
    paddingVertical: 10,
  },
  btn2Selected: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.themeColor1,
    marginLeft: 5,
    alignSelf: "flex-start",
    width:'95%',
    paddingVertical: 10,
  },
  about: {
    marginTop: 30,
    color: Colors.themeColor1,
    fontSize: 16,
    fontFamily: Colors.font
  },
  saperator: {
    width: "80%",
    height: 2,
    backgroundColor: Colors.themeColor1,
    marginTop: 10,
  },
  section2: {
    backgroundColor: Colors.themeColor1,
    flexDirection: "row",
    height: 60,
    width: "100%",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  tabIcon: { width: 16, height: 16,resizeMode:'contain' },
  tabLabel: {
    color: Colors.themeColor2,
    textAlign: "center",
    fontSize: 14,
    fontFamily: Colors.font,
    marginLeft: 10,
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: Colors.themeColor2,
  },
  listItem: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderColor: "#707070",
    height: 40,
  },
  item1: {
    justifyContent: "center",
    flex: 0.6,
    paddingLeft: 10,
  },
  item2: {
    justifyContent: "center",
    flex: 0.4,
  },
  item1Label: {
    color: Colors.themeColor1,
    fontSize: 16,
    fontFamily: Colors.font
  },
  item2Label: {
    color: "#707070",
    fontSize: 16,
    fontFamily: Colors.font
  },
  similarContainer: {
  },
  similarProducts: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 15,
  },
  similarProduct: {
    width: "33%",
  },
  similarImage: {
    backgroundColor: "#e5e5e5",
    width: "95%",
    height: 120,
    alignSelf: "center",
  },
  orderBooking: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  popup: {
    alignItems: "center",
  },
  successIcon: {
    width: 80,
    height: 80,
    marginBottom:20,
  },
  popupImg: {
    width: 130,
    height: 130,
    backgroundColor: "#e5e5e5",
    borderRadius: 200,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  label2: {
    color: Colors.themeColor1,
    fontSize: 18,
    marginTop: 20,
    fontFamily: Colors.font
  },
  label3: {
    color: '#707070',
    fontSize: 15,
    fontFamily: Colors.font,
    marginTop: 5,
    marginBottom:30
  },
  label4: {
    color: Colors.themeColor1,
    fontSize: 20,
    fontFamily: Colors.font,
    textAlign:'center',
    marginBottom:30
  },
  imageLabelHeart:{
    width:10,
    height:10,
    resizeMode:'contain'
  },
  priceLabel:{
    fontFamily:Colors.font,
    fontSize:14,
    textDecorationLine: 'line-through'
  },
  mrpLabel:{
    fontFamily:Colors.font
  }
});
