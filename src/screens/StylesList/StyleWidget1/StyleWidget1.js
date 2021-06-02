import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Images from "../../../utils/Images";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome'
import AppConstants from "../../../utils/AppConstants";


export default class StyleWidget1 extends Component {
  constructor(props) {
    super(props);
  }

  renderStatus = (id) => {
    switch (id) {
      case 1:
        return "Delivered";
        break;
    }
  };

  render() {
    var data = this.props.data;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source ={{uri:AppConstants.baseUrl+data.image}} style={styles.productImg} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <View style={{flex:1}}>
            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.article}>Article : {data.article}</Text>
              </View>
              <TouchableOpacity style={{ justifyContent: "center" }}>
                <Image
                  source={Images.heart}
                  style={{ width: 15, height: 15, resizeMode: "contain" }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.title}>{data.subtitle}</Text>
            </View>
            <View style={{marginTop:5}}>
              <Text style={styles.sizes}>
                {data.available_sizes.map((item, index) => {
                  return (
                    <Text key={index}>
                      {item.size}
                      {index != data.available_sizes.length - 1 ? ", " : " "}
                    </Text>
                  );
                })}
              </Text>
            </View>
            <View style={styles.colors}>
              {data.available_colors.map((item, index) => {
                if (index < 3) {
                  return (
                    <View style={styles.colorContainer} key={index}>
                      <View style={[styles.color, { backgroundColor: item.color }]} />
                    </View>
                  );
                }
              })}
              {data.available_colors.length > 3 && (
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.moreColor}>
                    +{data.available_colors.length - 3} More
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.priceContainer}>
          <Text style={styles.strikePrice}><Icon name="rupee"size={8}/> {data.piece_rate}/pc</Text>
            <Text style={styles.price}><Icon name="rupee"/> {data.piece_rate}/pc</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 5,
              alignSelf: "flex-end",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.marginLabel}>{data.margin}% Margin</Text>
            </View>
            <View>
              <Text style={styles.marginLabel}>
                MRP: <Icon name="rupee"/> <Text style={{ color: "green" }}>{data.price}/-</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
