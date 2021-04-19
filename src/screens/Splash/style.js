import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    position:'absolute'
  },
  bottomLogo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    position:'absolute'
  }
});