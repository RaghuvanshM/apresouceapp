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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}> 
      
      <ScrollView 
          keyboardShouldPersistTaps="handled" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow:1,justifyContent:'center'}}
          >
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}  style={{flex:1}}>
          <View style={[styles.section1]}>
            <Image source={Images.loggedInUser} style={styles.img} />
            <Text style={styles.label1}>John </Text>
            <Text style={styles.label2}>
              San Francisco, CA
            </Text>
            <View style={styles.widget}>              
              <View style={{ justifyContent: "center", flex: 1 }}>
                <TextInput
                  placeholder={"Name"}
                  style={styles.textbox}
                  placeholderTextColor={Colors.themeColor1}
                />
              </View>
            </View>
            <View style={styles.widget}>              
              <View style={{ justifyContent: "center", flex: 1 }}>
                <TextInput
                  maxLength={10}
                  keyboardType={"phone-pad"}
                  placeholder={"Mobile Number"}
                  style={styles.textbox}
                  placeholderTextColor={Colors.themeColor1}
                />
              </View>
            </View>
            <View style={styles.widget}>              
              <View style={{ justifyContent: "center", flex: 1 }}>
                <TextInput
                  placeholder={"Shop Information"}
                  style={styles.textbox}
                  placeholderTextColor={Colors.themeColor1}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editLabel}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section2}>
            <Button
              title="LOGOUT"
              style={styles.getBtn}
              onPress={() => {
                AsyncStorage.removeItem("token");
                this.props.navigation.navigate("authStack");
              }}
            />
          </View>
         
        </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
