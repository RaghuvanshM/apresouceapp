import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./style";

export default class StylesCartWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.data;
    var index = this.props.index;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(this.props.showWishlistOptions?"colorsWishlistScreen":"colorsCartScreen")}
          style={[
            styles.container1,
            index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 },
          ]}
        >
          <View style={styles.imgContainer}>
            <Image style={styles.proImg}/>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label} numberOfLines={1}>
              {data.title}
            </Text>
            <Text style={styles.wsp}>WSP <Text style={{color:'green'}}>:<Icon name="rupee"/>XX.XX/pc</Text>&emsp;<Text style={{fontSize:8,textDecorationLine: 'line-through'}}><Icon name="rupee" size={8}/> XX.XX/pc</Text></Text>
            <Text style={styles.mrp}>MRP <Text style={{color:'green'}}>: <Icon name="rupee"/> 1499/-</Text></Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
