import React, { Component, Fragment } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet ,ActivityIndicator} from "react-native";
import AppConstants from "../../../utils/AppConstants";
import FastImage from "react-native-fast-image";

import styles from './styles';

export default class SubCategoryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { data, index } = this.props;
    
    let loginSubmit = true
    return (
      <Fragment>
          
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(
                this.props.showCartOptions
                  ? "stylesCartScreen"
                  : this.props.showWishlistOptions
                  ? "stylesWishlistScreen"
                  : "stylesListScreen",
                { id: data.category.id }
              )
            }
            style={[
              styles.container1,
              index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 },
            ]}
          >
            <View style={styles.imgContainer}>
              <FastImage
             source={{ uri: AppConstants.baseUrl + data.category.image }}
                style={styles.proImg}
              />
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label} numberOfLines={1}>
                {data.category.title}
              </Text>

              {(this.props.showCartOptions ||
                this.props.showWishlistOptions) && (
                <View>
                  <Text style={styles.label1} numberOfLines={1}>
                    Color : {data.total_colors}
                  </Text>
                  <Text style={styles.label1} numberOfLines={1}>
                    Style : {data.total_styles}
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
      </Fragment>
    );
  }
}

