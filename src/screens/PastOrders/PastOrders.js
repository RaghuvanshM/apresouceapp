import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Colors from "../../utils/Colors";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import PastOrderWidget from "./PastOrderWidget/PastOrderWidget";
import styles from "./style";
import Button from "../../controls/Button/Button";

export default class PastOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          id: 1,
          title: "Red kurta Set",
          units: 15,
          tax: 110,
          amount: 48976,
          status: 1,
          date: new Date(),
          orderDate: new Date(),
        },
        {
          id: 2,
          title: "Red kurta Set",
          units: 15,
          tax: 110,
          amount: 48976,
          status: 1,
          date: new Date(),
          orderDate: new Date(),
        },
      ],
    };
  }

  goToOrderDetail = (item) => {
    this.props.navigation.navigate("orderDetailsScreen", { order: item });
  };

  renderOrders = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this.goToOrderDetail(item)}
      >
        <PastOrderWidget order={item} type={1}/>
      </TouchableOpacity>
    );
  };
  renderFooter = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.showMoreLabel}>Show more</Text>
        <Image source={Images.showMore} style={styles.showMoreImg} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Past Orders"} {...this.props} />
        <View style={styles.searchSection}>
          <View style={styles.searchBox}>
            <View style={styles.searchIconContainer}>
              <Image source={Images.magnifier} style={styles.magnifier} />
            </View>
            <View style={styles.searchTextContainer}>
              <TextInput
                placeholder={"Search"}
                placeholderTextColor={Colors.themeColor1}
                style={styles.searchText}
              />
            </View>
          </View>
        </View>
        <FlatList
          data={this.state.orders}
          renderItem={this.renderOrders}
          ListFooterComponent={this.renderFooter}
          keyExtractor={(item) => item.id + item.title}
        />
      </View>
    );
  }
}
