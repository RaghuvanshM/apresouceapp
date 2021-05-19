import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Button from "../../controls/Button/Button";
import Images from "../../utils/Images";
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null
    }
  }

  componentDidMount(){
    this.getUser();
  }

  getUser=async()=>{
    var data = await AsyncStorage.getItem('user');
    data = JSON.parse(data);
    this.setState({user:data});
  }

  setLoggedInUser = () => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "appStack" }],
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={Images.loggedInUser} style={styles.img} />
          <Text style={styles.txt}>Hi... {this.state.user?this.state.user.FName:''}</Text>
        </View>
        <View style={styles.section2}>
          <Button
            title="PROCEED"
            style={styles.getBtn}
            onPress={() => this.setLoggedInUser()}
          />
        </View>
      </View>
    );
  }
}
