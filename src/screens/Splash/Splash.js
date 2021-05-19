import React, { Component } from "react";
import { ImageBackground, Animated, Easing, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppviewModel from "../../utils/AppviewModel";
import { CommonActions } from "@react-navigation/native";
import { getUniqueId } from "react-native-device-info";
import Images from "../../utils/Images";
import styles from "./style";
import AppConstants from "../../utils/AppConstants";
var windowHeight = Dimensions.get("window").height;

const TIME = 600;
export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.topAnimatorValue = new Animated.Value(0);
    this.bottomAnimatorValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.init();
    this.animateToBottom();
    this.animateToTop();
  }

  init = async() => {
    var token = await AsyncStorage.getItem("token");
    var payload = {
      unique_id: getUniqueId(),
      fcm_id: "fcmid",
      app_type: AppConstants.appType,
      token: token,
      app_version: AppConstants.appVersion,
      extra_info: null,
    };
    console.log(payload);
    AppviewModel.sendApiCall(
      "/login-signup/app-status",
      payload,
      null,
      (response) => {
        console.log(response);
        this.getConf(response);        
      },
      (error) => {
        console.log(error);
      }
    );
  };

  getConf=async(response)=>{
    var conf = await AsyncStorage.getItem('landingpage_configurations');
    conf = JSON.parse(conf);
    if(conf && (response.landing_page_version == conf.version)){
      AppviewModel.getLandingPage = false;
    } else {
      AppviewModel.getLandingPage = true;
    }
    this.redirect(response.status);
  }
  animateToBottom() {
    Animated.timing(this.topAnimatorValue, {
      toValue: 1,
      duration: TIME,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  animateToTop() {
    Animated.timing(this.bottomAnimatorValue, {
      toValue: 1,
      duration: TIME,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  redirect = async (id) => {
    switch (id) {
      case 1:
        setTimeout(() => {
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: "appStack" }],
            })
          );
        }, TIME + 100);
        break;
      case 2:
        setTimeout(() => {
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: "authStack" }],
            })
          );
        }, TIME + 100);
        break;
      case 3:
        break;
    }
  };

  render() {
    const topSideAnimator = this.topAnimatorValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, windowHeight / 2 - 100],
    });
    const bottomSideAnimator = this.bottomAnimatorValue.interpolate({
      inputRange: [0, 1],
      outputRange: [windowHeight, windowHeight / 2 - 20],
    });

    return (
      <ImageBackground source={Images.splash} style={styles.container}>
        <Animated.Image
          source={Images.logo0}
          style={[
            styles.topLogo,
            {
              transform: [
                {
                  translateY: topSideAnimator,
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={Images.logo1}
          style={[
            styles.bottomLogo,
            {
              transform: [
                {
                  translateY: bottomSideAnimator,
                },
              ],
            },
          ]}
        />
      </ImageBackground>
    );
  }
}
