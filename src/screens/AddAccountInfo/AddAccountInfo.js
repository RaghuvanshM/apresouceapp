import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../../controls/Button/Button";
import styles from "./style";
import Images from "../../utils/Images";
import Colors from "../../utils/Colors";
import User from "../../models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppviewModel from "../../utils/AppviewModel";
import CheckBox from "@react-native-community/checkbox";
import { getUniqueId } from "react-native-device-info";
import AppConstants from "../../utils/AppConstants";
import {connect} from 'react-redux'
import {saveUserData} from '../../store/action' 

 class AddAccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.route.params.token,
      shopName: "",
      fname: "",
      pincode: "",
      ReceiveUpdatesOnWhatsapp:false
    };
    console.log(props.route.params.token);
  }

  setLoggedInUser = (response) => {
    AsyncStorage.setItem("token", this.state.token);
   // AsyncStorage.setItem("user", JSON.stringify(response.user_info));
   this.props.saveUserData(response.user_info) ;
    this.props.navigation.navigate("appStack");
  };

  save=()=>{
    var payload = {
      unique_id: getUniqueId(),
      app_type: AppConstants.appType,
      token: this.state.token,
      shop_name: this.state.shopName,
      fname:this.state.fname,
      pincode:this.state.pincode,
      ReceiveUpdatesOnWhatsapp:this.state.ReceiveUpdatesOnWhatsapp
    };
    console.log(payload);
    AppviewModel.sendApiCall(
      "/login-signup/registration",
      payload,
      null,
      (response) => {
        console.log(response);
        this.setLoggedInUser(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "width"}
            style={{ flex: 1 }}
          >
            <View style={styles.section1}>
              <View style={styles.imageSection}>
                <Image source={Images.accInfoBanner} style={styles.img} />
              </View>
              <Text style={styles.label1}>Enter Account Information</Text>
              <Text style={styles.label2}>
                Register your business with Singla Apparels
              </Text>
              <View style={[styles.widget, { marginTop: 20 }]}>
                <View style={{ justifyContent: "center", marginRight: 10 }}>
                  <Image
                    source={Images.userColored}
                    style={styles.arrowRight}
                  />
                </View>
                <View style={{ justifyContent: "center", flex: 1 }}>
                  <TextInput
                    defaultValue={this.state.fname}
                    onChangeText={(val) => this.setState({ fname: val })}
                    placeholder={"Your Name"}
                    style={styles.textbox}
                    placeholderTextColor={"#333"}
                  />
                </View>
              </View>
              <View style={styles.widget}>
                <View style={{ justifyContent: "center", marginRight: 10 }}>
                  <Image source={Images.pastOrders} style={styles.arrowRight} />
                </View>
                <View style={{ justifyContent: "center", flex: 1 }}>
                  <TextInput
                    defaultValue={this.state.shopName}
                    onChangeText={(val) => this.setState({ shopName: val })}
                    placeholder={"Business or Shop Name"}
                    style={styles.textbox}
                    placeholderTextColor={"#333"}
                  />
                </View>
              </View>
              <View style={styles.widget}>
                <View style={{ justifyContent: "center", marginRight: 10 }}>
                  <Image source={Images.mapMarker} style={styles.arrowRight} />
                </View>
                <View style={{ justifyContent: "center", flex: 1 }}>
                  <TextInput
                    defaultValue={this.state.pincode}
                    onChangeText={(val) => this.setState({ pincode: val })}
                    maxLength={6}
                    keyboardType={"number-pad"}
                    placeholder={"Pincode (Example : 560087)"}
                    style={styles.textbox}
                    placeholderTextColor={"#333"}
                  />
                </View>
              </View>
              <View style={styles.checkboxSection}>
                <CheckBox
                  tintColor={"#666"}
                  onCheckColor={"green"}
                  onFillColor={"#fff"}
                  onTintColor={"#888"}
                  value={this.state.ReceiveUpdatesOnWhatsapp}
                  onValueChange={(val)=>this.setState({ReceiveUpdatesOnWhatsapp:val})}
                />
                <Text style={styles.label3}>
                  Receive order and account related updates on whatsApp
                </Text>
              </View>
            </View>
            <View style={styles.section2}>
              <Button
                title="PROCEED"
                style={styles.getBtn}
                onPress={() => this.save()}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
)(AddAccountInfo);