import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class StyleWidget2 extends Component {
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
        <View style={styles.imageSection}>
          <View style={styles.mainImage}>
            <View style={styles.img} />
          </View>
          <View style={styles.listImages}>
            <ScrollView style={styles.scroll}>
              {data.subImages.map((item,index) => {
                return <View key={index} style={styles.subImage} />;
              })}
            </ScrollView>
          </View>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <View style={{ marginTop: 3 }}>
            <Text style={styles.title}>
              {data.title} : {data.subTitle}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.sizes}>Article : {data.article}</Text>
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
            <View>
              <Text style={[styles.marginLabel, { alignSelf: "flex-end" }]}>
                {data.pieceRate}/pc
              </Text>
              <Text style={styles.marginLabel}>
                WSP: <Icon name="rupee"/> 
                <Text style={{ color: "green" }}> {data.pieceRate}/pc</Text>
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 7 }}>
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
