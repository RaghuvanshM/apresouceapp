import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Images from "../../../utils/Images";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome'

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
          <Image style={styles.productImg} />
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
              <Text style={styles.title}>{data.subTitle}</Text>
            </View>
            <View style={{marginTop:5}}>
              <Text style={styles.sizes}>
                {data.sizes.map((item, index) => {
                  return (
                    <Text key={index}>
                      {item.size}
                      {index != data.sizes.length - 1 ? ", " : " "}
                    </Text>
                  );
                })}
              </Text>
            </View>
            <View style={styles.colors}>
              {data.colors.map((item, index) => {
                if (index < 3) {
                  return (
                    <View style={styles.colorContainer} key={index}>
                      <View style={[styles.color, { backgroundColor: item }]} />
                    </View>
                  );
                }
              })}
              {data.colors.length > 3 && (
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.moreColor}>
                    +{data.colors.length - 3} More
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.priceContainer}>
          <Text style={styles.strikePrice}><Icon name="rupee"size={8}/> {data.pieceRate}/pc</Text>
            <Text style={styles.price}><Icon name="rupee"/> {data.pieceRate}/pc</Text>
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
