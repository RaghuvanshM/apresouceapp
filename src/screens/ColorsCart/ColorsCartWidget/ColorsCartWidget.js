import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import Popup from "../../../controls/Popup/Popup";
import Button from "../../../controls/Button/Button";
import styles from "./style";
import OrderBooking from "../../OrderBooking/OrderBooking";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ColorsCartWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPopup: false,
    };
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
        <Modal
          transparent={true}
          visible={this.state.editPopup}
          onRequestClose={() => this.setState({ editPopup: false })}
        >
          <Popup onClose={() => this.setState({ editPopup: false })}>
            <View>
              <Text style={styles.editSelection}>Edit Selection</Text>
              <View style={styles.separator} />
              <OrderBooking data={data.sizes} />
              <Button
                title="Done"
                style={{
                  marginTop: 10,
                  paddingHorizontal: 50,
                  paddingVertical: 10,
                }}
                onPress={() => this.setState({ editPopup: false })}
              />
            </View>
          </Popup>
        </Modal>
        <View style={styles.imageContainer}>
          <Image style={styles.productImg} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <View style={{flex:1}}>
            <View>
              <Text style={[styles.title,{marginTop:5}]}>{data.title}</Text>
              <Text style={styles.title}>{data.subTitle}</Text>
              <Text style={[styles.label3,{marginTop:5}]}>Product ID : {data.title}</Text>
              <Text style={styles.label3}>Color : {data.title}</Text>
            </View>
            {!this.props.showWishlistOptions && (
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.title}>Units:</Text>
                </View>
                <View style={{ justifyContent: "center", marginLeft: 20 }}>
                  <Text style={styles.unit}>12</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ editPopup: true });
                  }}
                  style={{ justifyContent: "center", marginLeft: 10 }}
                >
                  <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}><Icon name="rupee"/> {data.pieceRate}/pc</Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.marginLabel}>{data.margin}% Margin</Text>
            </View>
            <View>
              <Text style={styles.marginLabel}>
                MRP: <Icon name="rupee"/> <Text style={{ color: "green" }}>{data.price}/-</Text>
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <TouchableOpacity style={[styles.btn, { marginRight: 3 }]}>
              <Text style={styles.btnLabel}>+ Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { marginLeft: 3 }]}>
              <Text style={styles.btnLabel}>Remove </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
