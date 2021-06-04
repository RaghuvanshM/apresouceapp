import React, { Component } from "react";
import { View, Text } from "react-native";
import IncDecCounter from "../../controls/IncDecCounter/IncDecCounter";
import styles from "./style";

export default class OrderBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.transformData(this.props.data),
    };
  }

  transformData = (data) => {
    data = data.filter((item) => {
      item.qty = 15;
      return item;
    });
    return data;
  };
  render() {
    var data = this.state.data;
    console.log(this.props)
    return (
      <View>
        <View style={styles.orderItem}>
          <View style={styles.orderItem1}>
            <Text style={styles.orderLabel}>SIZE</Text>
          </View>
          <View style={styles.orderItem2}>
            <Text style={styles.orderLabel}>QNT</Text>
          </View>
          <View style={styles.orderItem3}>
            <Text style={styles.orderLabel}>WSP</Text>
          </View>
          <View style={styles.orderItem4}>
            <Text style={styles.orderLabel}>STOCK</Text>
          </View>
          <View style={styles.orderItem5}>
            <Text style={styles.orderLabel}>BOOKED</Text>
          </View>
        </View>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.orderItem}>
              <View style={styles.orderItem1}>
                <Text style={styles.textbox}>{item.size}</Text>
              </View>
              <View style={styles.orderItem2}>
                <IncDecCounter value={item.qty} onValueChange={(val) => {this.props.onQuantityChange(item.size,val)}} />
              </View>
              <View style={styles.orderItem3}>
                <Text style={styles.textbox}>{item.wsp}</Text>
              </View>
              <View style={styles.orderItem4}>
                <Text style={styles.textbox}>{item.stock}</Text>
              </View>
              <View style={styles.orderItem5}>
                <Text style={styles.textbox}>{item.booked}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
