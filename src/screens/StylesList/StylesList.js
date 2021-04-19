import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import styles from "./style";
import StyleWidget1 from "./StyleWidget1/StyleWidget1";
import StyleWidget2 from "./StyleWidget2/StyleWidget2";
import Popup from "../../controls/Popup/Popup";
import Filters from "../Filters/Filters";

export default class StylesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      sortPopup: false,
      filterPopup: false,
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
    if (this.state.listView) {
      return (
        <TouchableOpacity
        activeOpacity={1}
          onPress={() =>
            this.props.navigation.navigate("colorsListScreen", { data: item })
          }
        >
          <StyleWidget1 data={item} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
        activeOpacity={1}
          onPress={() =>
            this.props.navigation.navigate("colorsListScreen", { data: item })
          }
        >
          <StyleWidget2 data={item} />
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.sortPopup}
          onRequestClose={() => this.setState({ sortPopup: false })}
        >
          <Popup
            style={{ justifyContent: "flex-start", flex: 1 }}
            containerStyle={{ backgroundColor: "transparent",flex:1 }}
          >
            <View style={styles.sortPopup}>
              <View style={[styles.sortTab]}>
                <Image source={Images.sortArrowDown} style={styles.sortImage} />
                <Text style={styles.sortLabel}>Price</Text>
                <Text style={[styles.sortLabel, { marginTop: 2 }]}>
                  Low - High
                </Text>
              </View>
              <View style={styles.sortTab}>
                <Image source={Images.sortArrowUp} style={styles.sortImage} />
                <Text style={styles.sortLabel}>Price</Text>
                <Text style={[styles.sortLabel, { marginTop: 2 }]}>
                  High - Low
                </Text>
              </View>
              <View style={styles.sortTab}>
                <Image source={Images.percentage} style={styles.sortImage} />
                <Text style={styles.sortLabel}>Margin</Text>
              </View>
              <View style={styles.sortTab}>
                <Image source={Images.new} style={styles.sortImage} />
                <Text style={styles.sortLabel}>What's New</Text>
              </View>

              <TouchableOpacity
                style={styles.sortCloseTab}
                onPress={() => this.setState({ sortPopup: false })}
              >
                <Image
                  source={Images.crossWhite}
                  style={styles.sortCloseImage}
                />
              </TouchableOpacity>
            </View>
          </Popup>
        </Modal>

        <Modal
          visible={this.state.filterPopup}
          onRequestClose={() => this.setState({ filterPopup: false })}
        >
          <Filters onClose={() => this.setState({ filterPopup: false })} />
        </Modal>
        <Header
          title={"250 Styles"}
          {...this.props}
          cart={true}
          wishlist={true}
          viewToggle={true}
          onViewToggle={() => {
            this.setState({ listView: !this.state.listView });
          }}
        />
        <View style={styles.section1}>
          <View style={styles.numberOfStyles}>
            <Text style={styles.numberOfStylesLabel}>Style : 09/250</Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{marginTop: 15 }}
            contentContainerStyle={{paddingHorizontal: 10, }}
            data={this.state.styles}
            renderItem={this.renderStyles}
            keyExtractor={(item) => item.id + item.title}
          />
        </View>
        <View style={styles.section2}>
          <TouchableOpacity
            onPress={() => this.setState({ filterPopup: true })}
            style={styles.tab}
          >
            <View style={{ justifyContent: "center" }}>
              <Image source={Images.filter} style={styles.tabIcon} />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.tabLabel}>FILTER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ sortPopup: true })}
            style={[styles.tab, styles.divider]}
          >
            <View style={{ justifyContent: "center" }}>
              <Image source={Images.sort} style={styles.tabIcon} />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.tabLabel}>SORT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
