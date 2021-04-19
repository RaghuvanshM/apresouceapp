import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../utils/Colors";
import Images from "../../utils/Images";
import styles from "./style";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView:true
    }
  }

  back() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS == "ios" && <View style={styles.iosMargin} />}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.back()}
            style={styles.backContainer}
          >
            <Image source={Images.back} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.optionsContainer}>
            {this.props.viewToggle && (
              <TouchableOpacity 
              onPress={()=>{
                this.setState({listView:!this.state.listView});
                this.props.onViewToggle();
              }}
              style={styles.option}>
                <Image source={this.state.listView?Images.square:Images.square1} style={styles.icon} />
              </TouchableOpacity>
            )}
            {this.props.cart && (
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('cartScreen')} style={styles.option}>
                <Image source={Images.cart} style={{ width: 22, height: 22 }} />
              </TouchableOpacity>
            )}
            {this.props.wishlist && (
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('wishlistScreen')} style={styles.option}>
                <Image source={Images.heartWhite} style={{width:18,height:18,resizeMode:'contain'}} />
              </TouchableOpacity>
            )}
            {this.props.helpIcon && (
              <TouchableOpacity style={styles.option}>
                <Image source={Images.info} style={{width:18,height:18,resizeMode:'contain'}} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
