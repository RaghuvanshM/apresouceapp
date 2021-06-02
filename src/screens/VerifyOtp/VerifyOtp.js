import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Alert,
} from "react-native";
import Button from "../../controls/Button/Button";
import styles from "./style";
import Images from "../../utils/Images";
import Colors from "../../utils/Colors";
import { getUniqueId } from "react-native-device-info";
import AppConstants from "../../utils/AppConstants";
import AppviewModel from "../../utils/AppviewModel";
import User from "../../models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {connect} from 'react-redux'
import {saveUserData} from '../../store/action'  
import Toast from 'react-native-simple-toast';


 class VerifyOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        this.scrollViewRef.scrollToEnd();
      }
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
  }

  goToAddInfoScreen = (token) => {
    this.props.navigation.navigate("addAccountInfoScreen",{token:token});
  };
  setLoggedInUser = (token,user) => {
    AsyncStorage.setItem("token", token);
    console.log("user",user);
   // AsyncStorage.setItem("user", JSON.stringify(user));
      this.props.saveUserData(user) ;
    this.props.navigation.navigate("greetingScreen");
  };

  verifyOtp = () => {
    var payload = {
      unique_id: getUniqueId(),
      app_type: AppConstants.appType,
      country_code: AppviewModel.selectedCountry,
      mobile: this.props.route.params.mobile,
      otp: this.state.otp,
    };
    console.log(payload);
    AppviewModel.sendApiCall(
      "/login-signup/otp-validate",
      payload,
      null,
      (response) => {
        console.log( response);
        switch (response.status) {
          case 0:
            Alert.alert(
              "Error",
              response.msg,
              [{ text: "OK", onPress: () => {}, style: "default" }],
              { cancelable: false }
            );
            break;
          case 1:
            this.setLoggedInUser(response.AccessToken,response.user_info);
            break;
          case 2:
            break;
          case 3:
              this.goToAddInfoScreen(response.AccessToken,);
            break;
          case 4:
            break;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };


  ResendOtpApiCall = () => {
    var payload = {
      unique_id: getUniqueId(),
      app_type: AppConstants.appType,
      country_code: AppviewModel.selectedCountry,
      mobile: this.props.route.params.mobile,
    };
    AppviewModel.sendApiCall(
      "/login-signup/login",
      payload,
      null,
      (response) => {
        console.log(response);
        if(response.status == 1){
          Toast.show("An OTP has been sent to your Registered Mobile Number. ",Toast.SHORT)
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  };



  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "width"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            ref={(ref) => (this.scrollViewRef = ref)}
          >
            <View style={styles.section1}>
              <Image source={Images.enterOtp} style={styles.img} />
              <Text style={styles.label1}>Verify Mobile Number</Text>
              <Text style={styles.label2}>
                Enter 6 digit verification code sent to your number
              </Text>
              <View style={styles.widget}>
                <View style={{ justifyContent: "center", flex: 1 }}>
                  <TextInput
                  keyboardType={'number-pad'}
                    placeholder={"_ _ _ _ _ _"}
                    defaultValue={this.state.otp}
                    onChangeText={(val) => this.setState({ otp: val })}
                    style={styles.textbox}
                    placeholderTextColor={Colors.themeColor1 + "70"}
                  />
                </View>
              </View>

              <View style={styles.changeNumberSection}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{ alignSelf: "flex-start" }}
                    onPress={() =>
                      this.props.navigation.navigate("loginScreen")
                    }
                  >
                    <Text style={styles.label3}>Change Number</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity  onPress={()=>this.ResendOtpApiCall()} style={{ alignSelf: "flex-end" }}>
                    <Text style={styles.label3}>Resend OTP</Text>
                  </TouchableOpacity>
                </View>
              </View> 
            </View>
          </ScrollView> 
          <View style={styles.section2}>
            <Button
              title="VERIFY CODE"
              style={styles.getBtn}
              onPress={() => this.verifyOtp()}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = { saveUserData };
export default connect(
  mapStateToProps,mapDispatchToProps
)(VerifyOtp);