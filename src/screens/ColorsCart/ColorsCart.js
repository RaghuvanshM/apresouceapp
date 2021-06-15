import React, { Component,Fragment } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
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
import AppviewModel from "../../utils/AppviewModel";

export default class ColorsCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: true,
      showPopup: false,
      cartColorData: [],
      isloading:false,
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
  getCartColor = () => {
    this.setState({ isloading: true });
    let payload = {
      style_id: this.props.route.params.id,
    };
    AppviewModel.sendApiCall(
      "/cart/getcolors",
      payload,
      null,
      (response) => {
        
        if (response.status === "Success") {
          this.setState({
            cartColorData: response.data,
            isloading: false,
          });
        }
      },
      (error) => {
        console.log(error);
        this.setState({
          isloading: false,
        });
      }
    );
  };
  componentDidMount() {
   this.getCartColor();
  }
  renderStyles = ({ item }) => {
    return <ColorsCartWidget data={item} showCartOptions={true} {...this.props}/>;
  };
  closePopup = () => {
    this.setState({ showPopup: false }, () => {
      this.props.navigation.navigate("homeTabNavigator");
    });
  };

  render() {
    let { cartColorData,isloading } = this.state;
    return (
      <Fragment>
         {isloading && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: 'rgba(3,3,3, 0.8)',
            zIndex: 5,
          }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
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
           data={cartColorData.length && cartColorData[0].colors}
             //data={this.state.styles}
            renderItem={this.renderStyles}
            keyExtractor={(item,index) => String(index)}
          />
        </View>
        <TouchableOpacity
          style={styles.section2}
          onPress={() => this.setState({ showPopup: true })}
        >
          <Text style={styles.label3}>REQUEST QUOTE</Text>
        </TouchableOpacity>
      </View>
      </Fragment>
    );
  }
}
