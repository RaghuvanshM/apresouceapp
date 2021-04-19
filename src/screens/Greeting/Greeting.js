import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Button from "../../controls/Button/Button";
import Images from "../../utils/Images";
import { CommonActions } from "@react-navigation/native";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
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
          <Text style={styles.txt}>Hi... John Doe!</Text>
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
