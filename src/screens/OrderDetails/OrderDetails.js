import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import Header from "../Header/Header";
import styles from "./style";
import PastOrderWidget from "../PastOrders/PastOrderWidget/PastOrderWidget";
import moment from "moment";

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackingData: [
        {
          Id: 1,
          Title: "Ordered",
          SubTitle: "Your Order has been placed.",
          Date: new Date(),
        },
        {
          Id: 2,
          Title: "Packed",
          SubTitle: "Your Order has been processed.",
          Date: new Date(),
        },
        {
          Id: 3,
          Title: "Shipped",
          SubTitle: "Your Order has been shipped.",
          Date: new Date(),
        },
        {
          Id: 4,
          Title: "Delivered",
          SubTitle: "Your Order has been delivered.",
          Date: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={" Order Details"} {...this.props} />

        <View style={styles.idContainer}>
          <Text style={styles.idLabel}>Order ID - 00OD1198878739</Text>
        </View>

        <PastOrderWidget order={this.props.route.params.order} type={2} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.section1}>
            <View style={{ flex: 1 }}>
              {this.state.trackingData.map((item, index) => {
                return (
                  <View key={index} style={styles.trackItem}>
                    <View style={styles.trackItem1}>
                      <View style={styles.circle} />
                      {index + 1 != this.state.trackingData.length && (
                        <View style={styles.line} />
                      )}
                    </View>
                    <View style={styles.trackItem2}>
                      <Text style={styles.trackTitle}>{item.Title}</Text>
                      <Text style={styles.trackSubTitle}>{item.SubTitle}</Text>
                      <Text style={styles.trackDate}>
                        {moment(item.Date).format("ddd, Do MMM YY - hh.mm a")}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={{ width: 180 }}>
              <Text style={styles.shipmentLabel}>Shipment details:</Text>
              <Text style={styles.courierLabel}>
                Courier Name : Zadley Logistics
              </Text>
              <Text style={styles.trackLabel}>Tracking No : SLH0987654</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomSection}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={styles.label7}>
              See full Payment details of the related Products.
            </Text>
          </View>
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <TouchableOpacity style={styles.payLedgerBtn}>
              <Text style={{ color: Colors.themeColor1 }}>PAYMENT LEDGER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
