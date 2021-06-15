import React, { Component, Fragment } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import AppConstants from "../../../utils/AppConstants";

export default class StylesCartWidget extends Component {
  constructor(props) {
    super(props);
     console.log(props)
  }

  render() {
    var data = this.props.data;
    var index = this.props.index;
    console.log(data)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(
              this.props.showWishlistOptions
                ? "colorsWishlistScreen"
                : "colorsCartScreen",
                { id: data.styles.id,pricerate:data.styles.piece_rate,margindata:data.styles.margin,totalPrice:data.styles.price },
            )
          }
          style={[
            styles.container1,
            index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 },
          ]}
        >
          <View style={styles.imgContainer}>
            <FastImage
            source={{ uri: AppConstants.baseUrl + data.styles.image }}
              style={styles.proImg}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label} numberOfLines={1}>
              {data.styles.title}
            </Text>
            <Text style={styles.wsp}>
              WSP{" "}
              <Text style={{ color: "green" }}>
                :<Icon name="rupee" />
                {data.styles.piece_rate}/pc
              </Text>
              &emsp;
              <Text style={{ fontSize: 8, textDecorationLine: "line-through" }}>
                <Icon name="rupee" size={8} /> XX.XX/pc
              </Text>
            </Text>
            <Text style={styles.mrp}>
              MRP{" "}
              <Text style={{ color: "green" }}>
                : <Icon name="rupee" /> {data.styles.price}/-
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
