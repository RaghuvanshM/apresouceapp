import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";
import AppConstants from "./AppConstants";

export default {
  loggedInUser: null,
  countries: null,
  selectedCountry: "91",
  getLandingPage: true,
  sendApiCall: async (
    url,
    payload,
    method,
    successHandler,
    ErrorHandler,
    showAPIError
  ) => {

    method = method ? method : "POST";
    var token = await AsyncStorage.getItem("token");

    var headers = {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    };
    if (token) {
      var headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: "Bearer " + token,
      };
    }
    var callState = null;
    var body = [];
    for (var property in payload) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = payload[property];
      body.push(encodedKey + "=" + encodedValue);
    }
    body = body.join("&");
    var requestBody = {
      method: method,
      headers: headers,
    };
    if (method == "POST") {
      requestBody.body = body;
    }
    console.log(body);
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        fetch(AppConstants.baseUrl + url, requestBody)
          .then((response) => {            
            console.log(response);
            callState = response.status;
            return response.json();
          })
          .then((responsejson) => {
            console.log(callState);
            if (callState == 200 || callState == 201) {
              successHandler(responsejson);
            } else {
              ErrorHandler(responsejson);
              if (!showAPIError) {
                Alert.alert(
                  "Error",
                  responsejson.msg,
                  [{ text: "OK", onPress: () => {}, style: "default" }],
                  { cancelable: false }
                );
              }
            }
          })
          .catch((error) => {
            console.log(error);
            ErrorHandler(error);
            Alert.alert(
              "Server Error",
              "Something went wrong, while communicating with server.",
              [{ text: "OK", onPress: () => {}, style: "default" }],
              { cancelable: false }
            );
          });
      } else {
        Alert.alert(
          "Network Error",
          "You are not connected to the internet, check your network connection and try again.",
          [{ text: "OK", onPress: () => {}, style: "default" }],
          { cancelable: false }
        );
      }
    });
  },
};
