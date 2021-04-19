import React, { Component } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import styles from "./style";
import ColorsCartWidget from "../ColorsCart/ColorsCartWidget/ColorsCartWidget";

export default class ColorsWishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
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
    return <ColorsCartWidget data={item} showWishlistOptions={true}/>;
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Colors"} {...this.props} cart={true} />
        <View style={styles.section1}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 15 }}
            contentContainerStyle={{paddingHorizontal:10}}
            data={this.state.styles}
            renderItem={this.renderStyles}
            keyExtractor={(item) => item.id + item.title}
          />
        </View>
      </View>
    );
  }
}
