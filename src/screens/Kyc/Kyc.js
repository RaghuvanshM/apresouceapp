import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "../../controls/Button/Button";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import styles from "./style";
import Popup from "../../controls/Popup/Popup";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      gst: true,
      showPopup: false,
    };
  }

  saveKyc = () => {
    this.setState({ showPopup: true });
  };
  closePopup = () => {
    this.setState({ showPopup: false });
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          transparent={true}
          visible={this.state.showPopup}
          onRequestClose={() => this.closePopup()}
        >
          <Popup onClose={() => this.closePopup()}>
            <View style={styles.popup}>
              <Image source={Images.success} style={styles.successIcon} />
              <Text style={styles.label4}>
                Your KYC completed{'\n'}successfully.
              </Text>
              <Button
                title={"OK"}
                style={{ paddingHorizontal: 50 }}
                onPress={() => this.closePopup(this.props.navigation.goBack())}
              />
            </View>
          </Popup>
        </Modal>
        <Header title={"Complete Your KYC"} {...this.props} />
        {this.state.index == 1 && (
          <View style={styles.section1}>
            <Text style={styles.label}>
              Select any ONE of the following documents :
            </Text>
            <TouchableOpacity
              onPress={() => this.setState({ index: 2, gst: true })}
              style={[styles.widget, { marginTop: 25 }]}
            >
              <View style={{ justifyContent: "center", flex: 1 }}>
                <Text style={styles.label1}>GST Certificate</Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Image source={Images.arrowRight} style={styles.arrowRight} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ index: 2, gst: false })}
              style={[styles.widget, { marginTop: 25 }]}
            >
              <View style={{ justifyContent: "center", flex: 1 }}>
                <Text style={styles.label1}>Udyog Aadhaar</Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Image source={Images.arrowRight} style={styles.arrowRight} />
              </View>
            </TouchableOpacity>
          </View>
        )}

        {this.state.index == 2 && (
          <View style={styles.section1}>
            <TouchableOpacity
              style={[styles.widget, { marginTop: 25 }]}
            >
              <View style={{ justifyContent: "center", marginRight: 10 }}>
                <Image source={Images.camera} style={styles.arrowRight} />
              </View>
              <View style={{ justifyContent: "center", flex: 1 }}>
                <Text style={styles.label1}>+ Upload Document</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ index: 2, gst: false })}
              style={[styles.widget, { marginTop: 25, paddingVertical: 10 }]}
            >
              <View style={{ justifyContent: "center", marginRight: 10 }}>
                <Image source={Images.edit} style={styles.arrowRight} />
              </View>
              <View style={{ justifyContent: "center", flex: 1 }}>
                <TextInput
                  placeholder={
                    this.state.gst ? "Enter GST Number" : "Enter Aadhaar Number"
                  }
                  style={styles.textbox}
                  placeholderTextColor={Colors.themeColor1}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.btnSection}>
              <Button
                title="DONE"
                style={{ width: "90%" }}
                onPress={() => this.saveKyc()}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}
