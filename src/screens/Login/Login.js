import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Button from "../../controls/Button/Button";
import styles from "./style";
import Images from "../../utils/Images";
import Colors from "../../utils/Colors";
import { getUniqueId } from "react-native-device-info";
import AppConstants from "../../utils/AppConstants";
import AppviewModel from "../../utils/AppviewModel";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
    };
  }

  componentDidMount(){
    this.getCountries();
  }

  getCountries=()=>{
    var payload = {
      unique_id: getUniqueId(),
      app_type: AppConstants.appType
    };
    console.log(payload);
    AppviewModel.sendApiCall(
      "/master/country?app_type=21&unique_id=925e181d-c31b-4eca-81da-81909b201f33",
      payload,
      'GET',
      (response) => {
        console.log(response);
        AppviewModel.countries = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  authenticate = () => {
    var payload = {
      unique_id: getUniqueId(),
      app_type: AppConstants.appType,
      country_code: AppviewModel.countries[0].CountryCode,
      mobile: this.state.mobile,
    };
    console.log(payload);
    AppviewModel.sendApiCall(
      "/login-signup/login",
      payload,
      null,
      (response) => {
        console.log(response);
        switch (response.status) {
          case 1:
            this.props.navigation.navigate("verifyScreen",{mobile:this.state.mobile});
            break;
          case 2:
            break;
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
          behavior={Platform.OS == "ios" ? "padding" : ""}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          >
            <View style={styles.section1}>
              <Image source={Images.enterNumber} style={styles.img} />
              <Text style={styles.label1}>Enter Mobile Number</Text>
              <Text style={styles.label2}>
                Enter your 10 - digit mobile number to receive the verification
                code
              </Text>
              <View style={styles.widget}>
                <View style={{ justifyContent: "center", marginRight: 10 }}>
                  <Image source={Images.phone} style={styles.arrowRight} />
                </View>
                <View style={{ justifyContent: "center", flex: 1 }}>
                  <TextInput
                    defaultValue={this.state.mobile}
                    onChangeText={(val) => this.setState({ mobile: val })}
                    maxLength={10}
                    keyboardType={"phone-pad"}
                    placeholder={"+91 Mobile number"}
                    style={styles.textbox}
                    placeholderTextColor={Colors.themeColor1 + "70"}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.section2}>
            <Button
              title="GET VERIFICATION CODE"
              style={styles.getBtn}
              onPress={() => this.authenticate()}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
