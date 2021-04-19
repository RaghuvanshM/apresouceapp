import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import moment from "moment";
import styles from "./style";
import Images from "../../../utils/Images";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PastOrderWidget extends Component {
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
    var order = this.props.order;
    return (
      <View style={{ overflow: "hidden" }}>
        <View style={styles.container}>
          {this.props.type == 1 && (
            <View style={styles.section1}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.label1}>Product Info :</Text>
              </View>
              <View style={{ justifyContent: "center", flex: 1 }}>
                <Text style={styles.label2}>
                  Ordered On : {moment(order.orderDate).format("dddd, Do MMM")}
                </Text>
              </View>
            </View>
          )}
          <View style={styles.section2}>
            <View style={styles.imageContainer}></View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{order.title}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Text style={styles.status}>
                    <Image source={Images.deliverIcon} style={styles.img} />
                    &ensp;
                    {this.renderStatus(order.status)}
                  </Text>
                  <Text style={styles.deliveryDate}>
                    on {moment(order.date).format("ddd, Do MMM")}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.units}>Units:</Text>
                <Text style={styles.unit}>{order.units}</Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.totalLabel}>Total Amount:</Text>
                  <Text style={styles.total}>
                  <Icon name="rupee"/> {order.amount.toLocaleString()}
                  </Text>
                </View>
                <View>
                  <Text style={styles.totalLabel}>Tax:</Text>
                  <Text style={styles.total}><Icon name="rupee"/> {order.tax}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
