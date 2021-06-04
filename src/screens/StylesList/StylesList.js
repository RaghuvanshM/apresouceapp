import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import styles from "./style";
import StyleWidget1 from "./StyleWidget1/StyleWidget1";
import StyleWidget2 from "./StyleWidget2/StyleWidget2";
import Popup from "../../controls/Popup/Popup";
import Filters from "../Filters/Filters";
import ProgressDialog from "../../controls/ProgressDialog";
import AppviewModel from "../../utils/AppviewModel";
import axios from "axios";

export default class StylesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      sortPopup: false,
      filterPopup: false,
      stylesArr: [],
      page: 0,
      isLoading: false,
      DataFound: true,
      dataTotalSize:0
      // styles: [
      //   {
      //     id: 1,
      //     article: "01",
      //     title: "Red kurta Set",
      //     subTitle: "Neck Embroidery work",
      //    subImages: [1, 2, 3, 4, 5, 6],
      //     sizes: [
      //       { size: "M", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "L", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
      //     ],
      //     price: 1999,
      //     pieceRate: 270.13,
      //     margin: 12,
      //     colors: [
      //       "brown",
      //       "skyblue",
      //       "yellow",
      //       "red",
      //       "green",
      //       "blue",
      //       "pink",
      //       "skyblue",
      //       "black",
      //       "white",
      //       "gray",
      //       "orange",
      //     ],
      //     specifications: [
      //       { id: 1, key: "Color", value: "Red" },
      //       { id: 2, key: "Gender", value: "Male" },
      //       { id: 3, key: "Fabric", value: "Cotton" },
      //       { id: 4, key: "Pattern", value: "Plain" },
      //       { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
      //       { id: 6, key: "Care", value: "Dry Clean" },
      //       { id: 7, key: "Length", value: "Knee Length" },
      //     ],
      //   },
      //   {
      //     id: 2,
      //     article: "01",
      //     title: "Red kurta Set",
      //     subTitle: "Neck Embroidery work",
      //     subImages: [1, 2, 3, 4, 5, 6],
      //     sizes: [
      //       { size: "M", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "L", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
      //     ],
      //     price: 1999,
      //     pieceRate: 270.13,
      //     margin: 12,
      //     colors: [
      //       "brown",
      //       "skyblue",
      //       "yellow",
      //       "red",
      //       "green",
      //       "blue",
      //       "pink",
      //       "skyblue",
      //       "black",
      //       "white",
      //       "gray",
      //       "orange",
      //     ],
      //     specifications: [
      //       { id: 1, key: "Color", value: "Red" },
      //       { id: 2, key: "Gender", value: "Male" },
      //       { id: 3, key: "Fabric", value: "Cotton" },
      //       { id: 4, key: "Pattern", value: "Plain" },
      //       { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
      //       { id: 6, key: "Care", value: "Dry Clean" },
      //       { id: 7, key: "Length", value: "Knee Length" },
      //     ],
      //   },
      //   {
      //     id: 3,
      //     article: "01",
      //     title: "Red kurta Set",
      //     subTitle: "Neck Embroidery work",
      //     subImages: [1, 2, 3, 4, 5, 6],
      //     sizes: [
      //       { size: "M", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "L", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
      //     ],
      //     price: 1999,
      //     pieceRate: 270.13,
      //     margin: 12,
      //     colors: [
      //       "brown",
      //       "skyblue",
      //       "yellow",
      //       "red",
      //       "green",
      //       "blue",
      //       "pink",
      //       "skyblue",
      //       "black",
      //       "white",
      //       "gray",
      //       "orange",
      //     ],
      //     specifications: [
      //       { id: 1, key: "Color", value: "Red" },
      //       { id: 2, key: "Gender", value: "Male" },
      //       { id: 3, key: "Fabric", value: "Cotton" },
      //       { id: 4, key: "Pattern", value: "Plain" },
      //       { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
      //       { id: 6, key: "Care", value: "Dry Clean" },
      //       { id: 7, key: "Length", value: "Knee Length" },
      //     ],
      //   },
      //   {
      //     id: 4,
      //     article: "01",
      //     title: "Red kurta Set",
      //     subTitle: "Neck Embroidery work",
      //     subImages: [1, 2, 3, 4, 5, 6],
      //     sizes: [
      //       { size: "M", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "L", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
      //     ],
      //     price: 1999,
      //     pieceRate: 270.13,
      //     margin: 12,
      //     colors: [
      //       "brown",
      //       "skyblue",
      //       "yellow",
      //       "red",
      //       "green",
      //       "blue",
      //       "pink",
      //       "skyblue",
      //       "black",
      //       "white",
      //       "gray",
      //       "orange",
      //     ],
      //     specifications: [
      //       { id: 1, key: "Color", value: "Red" },
      //       { id: 2, key: "Gender", value: "Male" },
      //       { id: 3, key: "Fabric", value: "Cotton" },
      //       { id: 4, key: "Pattern", value: "Plain" },
      //       { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
      //       { id: 6, key: "Care", value: "Dry Clean" },
      //       { id: 7, key: "Length", value: "Knee Length" },
      //     ],
      //   },
      //   {
      //     id: 5,
      //     article: "01",
      //     title: "Red kurta Set",
      //     subTitle: "Neck Embroidery work",
      //     subImages: [1, 2, 3, 4, 5, 6],
      //     sizes: [
      //       { size: "M", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "L", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "3XL", wsp: 156.76, stock: 12, booked: 14 },
      //       { size: "XXL", wsp: 156.76, stock: 12, booked: 14 },
      //     ],
      //     price: 1999,
      //     pieceRate: 270.13,
      //     margin: 12,
      //     colors: [
      //       "brown",
      //       "skyblue",
      //       "yellow",
      //       "red",
      //       "green",
      //       "blue",
      //       "pink",
      //       "skyblue",
      //       "black",
      //       "white",
      //       "gray",
      //       "orange",
      //     ],
      //     specifications: [
      //       { id: 1, key: "Color", value: "Red" },
      //       { id: 2, key: "Gender", value: "Male" },
      //       { id: 3, key: "Fabric", value: "Cotton" },
      //       { id: 4, key: "Pattern", value: "Plain" },
      //       { id: 5, key: "Sleeve Type", value: "Full Sleeves" },
      //       { id: 6, key: "Care", value: "Dry Clean" },
      //       { id: 7, key: "Length", value: "Knee Length" },
      //     ],
      //   },
      // ],
    };
  }

  componentDidMount() {
    this.subcategoryAPICall();
    this.setState({ page: 0 });
  }

  LoadMoreRandomData = () => {
    const { page } = this.state;
    this.setState(
      {
        page: page + 1,
      },
      () => {
        this.subcategoryAPICall();
      }
    );
  };

  subcategoryAPICall = () => {
    const { page, stylesArr, isLoading } = this.state;

    this.setState({ isLoading: true });

    var payload = {
      page_size: 2,
      page_index: page,
      subcategory_id: this.props.route.params.id,
    };
    AppviewModel.sendApiCall(
      "/styles",
      payload,
      null,
      (response) => {
        this.setState({
          stylesArr:
            page === 0 ? response.data : [...stylesArr, ...response.data],
          isLoading: false,dataTotalSize:response.data.length
        });
        if (response.data.length == 0) {
          this.setState({ DataFound: false });
        } else {
          this.setState({ DataFound: true });
        }
      },
      (error) => {
        console.log(error);
      }
    );

   
  };

  _listEmptyComponent = () => {
    return (
      !this.state.DataFound && (
        <View
          style={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Image
            style={{ width: 150, height: 150, alignSelf: "center" }}
            source={Images.noDataFound}
          />
        </View>
      )
    );
  };

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
    const { isLoading, stylesArr, page,dataTotalSize } = this.state;
    return (
      <View style={styles.container}>
        {/* <Modal
          visible={this.state.sortPopup}
          onRequestClose={() => this.setState({ sortPopup: false })}
        >
          <Popup
            style={{ justifyContent: "flex-start", flex: 1 }}
            containerStyle={{ backgroundColor: "transparent", flex: 1 }}
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
        </Modal> */}

        {/* <Modal
          visible={this.state.filterPopup}
          onRequestClose={() => this.setState({ filterPopup: false })}
        >
          <Filters onClose={() => this.setState({ filterPopup: false })} />
        </Modal> */}
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
            <Text style={styles.numberOfStylesLabel}>Style : {stylesArr.length +"/250"}</Text>
          </View>
          
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 15 }}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            data={this.state.stylesArr}
            renderItem={this.renderStyles}
            onEndReachedThreshold={0}
            onEndReached={this.LoadMoreRandomData}
            keyExtractor={(item) => item.id + item.title}
            ListEmptyComponent={this._listEmptyComponent}
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

        {isLoading && page !== 0 && (
          <ActivityIndicator
            color="#fb3b3bff"
            style={{
              marginLeft: 8,
              position: "absolute",
              bottom: 45,
              alignSelf: "center",
            }}
          />
        )}

        {isLoading && page == 0 && <ProgressDialog loading={isLoading} />}
      </View>
    );
  }
}
