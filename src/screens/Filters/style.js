import { StyleSheet,Platform } from "react-native";
import Colors from "../../utils/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  closeSection: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: Platform.OS == "ios" ? 50 : 15,
    paddingBottom: 15,
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  closeImg: {
    width: 20,
    height: 20,
    alignSelf: "flex-start",
  },
  clearBtn: {
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: "#fff",
    height: 30,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "flex-end",
  },
  clearLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontWeight: "500",
  },
  mainSection: {
    paddingHorizontal: 5,
    flexDirection: "row",
    flex: 1,
  },
  applyButtonSection: {
    paddingVertical: 20,
  },
  listItem: {
    flexDirection: "row",
    height: 60,
  },
  listItem1: {
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 0.5,
  },
  listItemLabel: {
    fontSize: 16,
    fontFamily: Colors.font,
  },
  listItem2: {
    paddingHorizontal: 3,
    justifyContent: "center",
    borderBottomWidth: 0.5,
  },
  fatBorder: {
    width: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  filterValueIcon: {
    width: 50,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#e5e5e5",
  },
  filterValueLabel: {
    color: Colors.themeColor1,
    fontFamily: Colors.font,
    fontSize: 13,
    marginTop: 5,
    textAlign: "center",
  },
});
