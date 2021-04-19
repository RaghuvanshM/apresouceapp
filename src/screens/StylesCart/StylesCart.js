import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import StylesCartWidget from "./StylesCartWidget/StylesCartWidget";
import styles from "./style";
import Popup from "../../controls/Popup/Popup";
import Button from "../../controls/Button/Button";

export default class StylesCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      data: [
        {
          id: 1,
          title: "Indo-western Kurta",
        },
        {
          id: 2,
          title: "Fancy Kurta",
        },
        {
          id: 3,
          title: "Kurta",
        },
      ],
    };
  }

  renderList = ({ item, index }) => {
    return <StylesCartWidget data={item} index={index} {...this.props} />;
  };
  closePopup = () => {
    this.setState({ showPopup: false },()=>{
      this.props.navigation.navigate('homeTabNavigator')
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          transparent={true}
          visible={this.state.showPopup}
          onRequestClose={() => this.closePopup()}
        >
          <Popup onClose={() => this.closePopup()}>
            <View style={styles.popup}>
              <Image source={Images.success} style={styles.successIcon} />
              <Text style={styles.label4}>Your Request has been Received</Text>
              <Button
                title={"OK"}
                style={{ paddingHorizontal: 50 }}
                onPress={() => this.closePopup()}
              />
            </View>
          </Popup>
        </Modal>
        <Header title={"Styles"} {...this.props} wishlist={true} />
        {this.state.data.length <= 0 && (
          <View style={styles.emptyCartSection}>
            <Image source={Images.emptyCart} style={styles.img} />
            <Text style={styles.label1}>Your Cart is Emplty!</Text>
            <Text style={styles.label2}>
              Explore More and shortlist some items.
            </Text>
          </View>
        )}
        <View style={styles.section1}>
          <TouchableOpacity
            style={styles.kycNotification}
            onPress={() => this.props.navigation.navigate("kycScreen")}
          >
            <Text style={styles.kycNotificationLabel}>
              Complete your KYC to view the Whole sale Prices
            </Text>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 5 }}
            contentContainerStyle={{ paddingBottom: 10,paddingHorizontal:10 }}
            data={this.state.data}
            renderItem={this.renderList}
            numColumns={2}
            keyExtractor={(item) => item.id + item.title}
          />
        </View>
        <TouchableOpacity
          style={styles.section2}
          onPress={() => this.setState({ showPopup: true })}
        >
          <Text style={styles.label3}>REQUEST QUOTE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
