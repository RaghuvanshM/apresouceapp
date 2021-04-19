import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Colors from "../../utils/Colors";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import styles from "./style";
import ColorsCartWidget from "./ColorsCartWidget/ColorsCartWidget";
import Popup from "../../controls/Popup/Popup";
import Button from "../../controls/Button/Button";

export default class ColorsCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      showPopup: false,
      styles: [
        {
          id: 1,
          article: "01",
          title: "Red kurta Set",
          subTitle: "Neck Embroidery work",
          subImages: [1, 2, 3, 4, 5, 6],
          sizes: [
            { size: "M", wsp: 156.76, stock: 12, booked: 14 },
            { size: "L", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
          ],
          price: 1999,
          pieceRate: 270.13,
          margin: 12,
          colors: [
            "brown",
            "skyblue",
            "yellow",
            "red",
            "green",
            "blue",
            "pink",
            "skyblue",
            "black",
            "white",
            "gray",
            "orange",
          ],
          specifications: [
            { id: 1, key: "Color", value: "Red" },
            { id: 2, key: "Gender", value: "Male" },
            { id: 3, key: "Fabric", value: "Cotton" },
            { id: 4, key: "Pattern", value: "Plain" },
            { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
            { id: 6, key: "Care", value: "Dry Clean" },
            { id: 7, key: "Length", value: "Knee Length" },
          ],
        },
        {
          id: 2,
          article: "01",
          title: "Red kurta Set",
          subTitle: "Neck Embroidery work",
          subImages: [1, 2, 3, 4, 5, 6],
          sizes: [
            { size: "M", wsp: 156.76, stock: 12, booked: 14 },
            { size: "L", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
          ],
          price: 1999,
          pieceRate: 270.13,
          margin: 12,
          colors: [
            "brown",
            "skyblue",
            "yellow",
            "red",
            "green",
            "blue",
            "pink",
            "skyblue",
            "black",
            "white",
            "gray",
            "orange",
          ],
          specifications: [
            { id: 1, key: "Color", value: "Red" },
            { id: 2, key: "Gender", value: "Male" },
            { id: 3, key: "Fabric", value: "Cotton" },
            { id: 4, key: "Pattern", value: "Plain" },
            { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
            { id: 6, key: "Care", value: "Dry Clean" },
            { id: 7, key: "Length", value: "Knee Length" },
          ],
        },
        {
          id: 3,
          article: "01",
          title: "Red kurta Set",
          subTitle: "Neck Embroidery work",
          subImages: [1, 2, 3, 4, 5, 6],
          sizes: [
            { size: "M", wsp: 156.76, stock: 12, booked: 14 },
            { size: "L", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
          ],
          price: 1999,
          pieceRate: 270.13,
          margin: 12,
          colors: [
            "brown",
            "skyblue",
            "yellow",
            "red",
            "green",
            "blue",
            "pink",
            "skyblue",
            "black",
            "white",
            "gray",
            "orange",
          ],
          specifications: [
            { id: 1, key: "Color", value: "Red" },
            { id: 2, key: "Gender", value: "Male" },
            { id: 3, key: "Fabric", value: "Cotton" },
            { id: 4, key: "Pattern", value: "Plain" },
            { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
            { id: 6, key: "Care", value: "Dry Clean" },
            { id: 7, key: "Length", value: "Knee Length" },
          ],
        },
        {
          id: 4,
          article: "01",
          title: "Red kurta Set",
          subTitle: "Neck Embroidery work",
          subImages: [1, 2, 3, 4, 5, 6],
          sizes: [
            { size: "M", wsp: 156.76, stock: 12, booked: 14 },
            { size: "L", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
          ],
          price: 1999,
          pieceRate: 270.13,
          margin: 12,
          colors: [
            "brown",
            "skyblue",
            "yellow",
            "red",
            "green",
            "blue",
            "pink",
            "skyblue",
            "black",
            "white",
            "gray",
            "orange",
          ],
          specifications: [
            { id: 1, key: "Color", value: "Red" },
            { id: 2, key: "Gender", value: "Male" },
            { id: 3, key: "Fabric", value: "Cotton" },
            { id: 4, key: "Pattern", value: "Plain" },
            { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
            { id: 6, key: "Care", value: "Dry Clean" },
            { id: 7, key: "Length", value: "Knee Length" },
          ],
        },
        {
          id: 5,
          article: "01",
          title: "Red kurta Set",
          subTitle: "Neck Embroidery work",
          subImages: [1, 2, 3, 4, 5, 6],
          sizes: [
            { size: "M", wsp: 156.76, stock: 12, booked: 14 },
            { size: "L", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
            { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
          ],
          price: 1999,
          pieceRate: 270.13,
          margin: 12,
          colors: [
            "brown",
            "skyblue",
            "yellow",
            "red",
            "green",
            "blue",
            "pink",
            "skyblue",
            "black",
            "white",
            "gray",
            "orange",
          ],
          specifications: [
            { id: 1, key: "Color", value: "Red" },
            { id: 2, key: "Gender", value: "Male" },
            { id: 3, key: "Fabric", value: "Cotton" },
            { id: 4, key: "Pattern", value: "Plain" },
            { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
            { id: 6, key: "Care", value: "Dry Clean" },
            { id: 7, key: "Length", value: "Knee Length" },
          ],
        },
      ],
    };
  }

  renderStyles = ({ item }) => {
    return <ColorsCartWidget data={item} showCartOptions={true} />;
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
        <Header title={"Colors"} {...this.props} wishlist={true} />
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
            style={{ marginTop: 15 }}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            data={this.state.styles}
            renderItem={this.renderStyles}
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
