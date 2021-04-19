import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default class SubCategoryWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.data;
    var index = this.props.index;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(
              this.props.showCartOptions
                ? "stylesCartScreen"
                : this.props.showWishlistOptions
                ? "stylesWishlistScreen"
                : "stylesListScreen"
            )
          }
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
            {(this.props.showCartOptions || this.props.showWishlistOptions) && (
              <View>
                <Text style={styles.label1} numberOfLines={1}>
                  Color : 04
                </Text>
                <Text style={styles.label1} numberOfLines={1}>
                  Style : {data.styles.length}
                </Text>
              </View>
            )}
            {this.props.showCartOptions && (
              <View>
                <Text style={styles.label1} numberOfLines={1}>
                  Total Quantity : 12
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
