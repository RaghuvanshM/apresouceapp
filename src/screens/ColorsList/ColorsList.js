import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import Button from "../../controls/Button/Button";
import Popup from "../../controls/Popup/Popup";
import ProductCarousel from "../../controls/ProductCarousel/ProductCarousel";
import Colors from "../../utils/Colors";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import OrderBooking from "../OrderBooking/OrderBooking";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import cloneDeep from 'lodash/cloneDeep';
import AppviewModel from "../../utils/AppviewModel";
import axios from 'axios'
import AppConstants from "../../utils/AppConstants";

export default class ColorsList extends Component {
  colors = [
    "Cream",
    "Yellow",
    "Red",
    "Black",
    "Olive",
    "Green",
    "Pink",
    "Gray",
    "Blue",
  ];
  constructor(props) {
    super(props);
    this.state = {
      isProDetails: false,
      listView: true,
      showPopup: false,
      addtocartdata: [],
      addtocart: [],
      for: "",
      similarProducts: [
        { id: 1, title: "", image: Images.cat1 },
        { id: 2, title: "", image: Images.cat2 },
        { id: 3, title: "", image: Images.cat3 },
        { id: 4, title: "", image: Images.cat3 },
        { id: 5, title: "", image: Images.cat3 },
        { id: 6, title: "", image: Images.cat3 },
        { id: 7, title: "", image: Images.cat3 },
        { id: 8, title: "", image: Images.cat3 },
        { id: 9, title: "", image: Images.cat3 },
      ],
      recentProducts: [
        { id: 1, title: "", image: Images.cat1 },
        { id: 2, title: "", image: Images.cat2 },
        { id: 3, title: "", image: Images.cat3 },
        { id: 4, title: "", image: Images.cat3 },
        { id: 5, title: "", image: Images.cat3 },
        { id: 6, title: "", image: Images.cat3 },
        { id: 7, title: "", image: Images.cat3 },
        { id: 8, title: "", image: Images.cat3 },
        { id: 9, title: "", image: Images.cat3 },
      ],
    };
  }

  selectTab = (type) => {
    this.setState({ isProDetails: type == 1 ? true : false });
  };

  renderProduct = (item, index) => {
    return (
      <View key={item.id} style={styles.similarProduct}>
        <View style={styles.similarImage} />
      </View>
    );
  };
  addToCartApiCall = () => {
    let  {data } = this.props.route.params
    const { addtocartdata } = this.state;
    var payload = {
      color_id: 1,
      style_id:123,
      subcategory_id:12333,
      quatity:[{"size":"xxxL","qty":20},{"size":"Mm","qty":25}]
    };
 console.log('payload',payload)
    AppviewModel.sendApiCall(
      "/cart/addcart",
      payload,
      null,
      (response) => {
         console.log(response)
        // this.setState({
        //   stylesArr:
        //     page === 0 ? response.data : [...stylesArr, ...response.data],
        //   isLoading: false, dataTotalSize: response.data.length
        // });
        // if (response.data.length == 0) {
        //   this.setState({ DataFound: false });
        // } else {
        //   this.setState({ DataFound: true });
        // }
      },
      (error) => {
        console.log(error);
      }
    );


  };
  closePopup = () => {
    this.setState({ showPopup: false });
  };
  onAddToCartPres = () => {
    this.setState({ showPopup: true, for: "wishlist" })
    this.addToCartApiCall()
  }
  onQuantitySelect = (size, quatity) => {
    let { addtocartdata, addtocart } = this.state
    const cartdata = cloneDeep(addtocartdata);
    let singledata = { "size": size, "qty": quatity }
    const selectedIndex = cartdata.findIndex(d => d.size === singledata.size);
    if (selectedIndex === -1) {
      addtocart.push(singledata)
    }
    else {
      addtocart[selectedIndex] = singledata;
    }
    console.log(addtocart)
    this.setState({ addtocartdata: addtocart })
  }
  render() {
    var data = this.props.route.params.data;
    return (
      <View style={styles.container}>
        {/* <Modal
          transparent={true}
          visible={this.state.showPopup}
          onRequestClose={() => this.closePopup()}
        >
          <Popup onClose={() => this.closePopup()}>
            <View style={styles.popup}>
              <Image source={Images.success} style={styles.successIcon}/>
              {this.state.for == "cart" && (
                <View style={{ width: "100%", alignItems: "center" }}>
                  <View style={styles.popupImg} />
                  <Text style={styles.label2}>Kurta Set: Neck Esdasdasdsa</Text>
                  <Text style={styles.label3}>Qnty:S(12), M(4), L(22)</Text>
                </View>
              )}
            </View>
            <Text style={styles.label4}>
              {this.state.for == "cart"
                ? "Your product has been successfully added to the Cart"
                : "Your product has been added to the wishlist"}
            </Text>
            <Button
              title={"Continue Shopping"}
              style={{ width: "100%", marginBottom: 10 }}
              onPress={() => this.closePopup()}
            />
            {this.state.for == "cart" && (
              <Button
                title={"Go to Cart"}
                style={{ width: "100%" }}
                onPress={() => {
                  this.closePopup();
                  this.props.navigation.navigate("cartScreen");
                }}
              />
            )}
          </Popup>
        </Modal> */}
        <Header
          title={data.title}
          {...this.props}
          cart={true}
          wishlist={true}
        />

        <ScrollView style={styles.section1}>
          <View style={styles.proId}>
            <Text style={styles.proIdLabel}>Product ID : {data.id}</Text>
          </View>
          <View style={{ borderBottomWidth: 1, alignSelf: "center" }}>
            <Text style={styles.label1}>Select among {data.available_colors.length} Color</Text>

          </View>
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 20, paddingHorizontal: 5 }}
              horizontal={true}
            >
              {data.available_colors.map((item, index) => {
                return (
                  <View style={styles.imageTab} key={index}>
                    <View style={styles.imageTabImg}>
                      <FastImage resizeMode='stretch'
                        source={{ uri: AppConstants.baseUrl + data.image }}
                        style={styles.imageTabImg}
                      />
                    </View>
                    <Text style={styles.imageLabel}>
                      {/* <Image
                        source={Images.heart}
                        style={styles.imageLabelHeart}
                      />{" "} */}
                      {item.color.charAt(0).toUpperCase() + item.color.substring(1)}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.thumbSection}>
            <View style={styles.mainImage}>
              <FastImage
                style={[styles.img, { borderRadius: 5 }]}
                source={{ uri: AppConstants.baseUrl + data.image }}
                resizeMode='cover'
              />
              {/* <View style={styles.img} /> */}
            </View>
            <View style={styles.listImages}>
              <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
              >
                {data.available_colors.map((item, index) => {
                  return <View key={index} style={styles.subImage} >
                    <FastImage resizeMode="stretch"
                      source={{ uri: AppConstants.baseUrl + data.image }}
                      style={{ ...styles.subImage, borderRadius: 5 }}
                    />
                  </View>
                })}
              </ScrollView>
            </View>
          </View>
          <View style={{ padding: 15 }}>
            <Text style={styles.title}>
              {data.title} : {data.subtitle}
            </Text>
            <Text style={styles.priceLabel}><Icon name="rupee" />{data.piece_rate}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.mrpLabel}><Icon name="rupee" />{data.piece_rate}/pc</Text>
              <Text style={[{ flex: 1, textAlign: "center" }, styles.mrpLabel]}>
                {data.margin} Margin
              </Text>
              <Text style={styles.mrpLabel}>
                MRP: <Text style={{ color: "green" }}><Icon name="rupee" /> {data.price}/-</Text>
              </Text>
            </View>
          </View>
          <View style={styles.btnSection}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button
                onPress={() => this.selectTab(1)}
                title="Order Booking"
                style={
                  this.state.isProDetails ? styles.btn1 : styles.btn1Selected
                }
                textStyle={{
                  fontSize: 13,
                  color: this.state.isProDetails
                    ? Colors.themeColor2
                    : Colors.themeColor1,
                }}
              />
            </View>
            <View style={{ flex: 1, justifyContent: "center", height: 50 }}>
              <Button
                onPress={() => this.selectTab(2)}
                title="Product Details"
                style={
                  this.state.isProDetails ? styles.btn2Selected : styles.btn2
                }
                textStyle={{
                  fontSize: 13,
                  color: this.state.isProDetails
                    ? Colors.themeColor1
                    : Colors.themeColor2,
                }}
              />
            </View>
          </View>
          {this.state.isProDetails && <View />}

          {!this.state.isProDetails && (
            <View style={{ paddingHorizontal: 15 }}>
              <Text style={styles.about}>
                {data.description}
              </Text>
              <View style={styles.saperator} />
              <Text style={styles.about}>{`${data.instruction.instruction_title}:`}</Text>
              <View style={{flexDirection:'row',flex:1}}>
                {data.instruction.instruction_items.map((a) => {
                  return (
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.intrutionsubtitle}>
                      {a}
                    </Text>
                    <Text>,</Text>
                    </View>
                  )
                })}
              </View>
              <View style={styles.saperator} />
              <Text style={styles.about}>
                Product Code: {data.productcode}{"\n"}
                Sold By: {data.productcode}{"\n"}
                View Supplier Information
              </Text>
              <View style={styles.saperator} />
              <Text style={styles.about}>Product Specification :</Text>
              <View style={styles.saperator} />
              {data.specifications.map((item, index) => {
                return (
                  <View style={styles.listItem} key={index}>
                    <View style={styles.item1}>
                      <Text style={styles.item1Label}>{item.key}</Text>
                    </View>
                    <View style={styles.item2}>
                      <Text style={styles.item2Label}>{item.value}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
          {this.state.isProDetails && (
            <View style={styles.orderBooking}>
              <OrderBooking
                data={data.available_sizes}
                onQuantityChange={(size, quatity) => { this.onQuantitySelect(size, quatity) }}
              />
            </View>
          )}
          <View style={styles.similarContainer}>
            <Text style={styles.about}>SIMILAR PRODUCTS</Text>
            <View style={{ marginTop: 20 }}>
              <ProductCarousel data={this.state.similarProducts} />
            </View>
          </View>

          <View style={styles.similarContainer}>
            <Text style={styles.about}>RECENTLY VIEWED</Text>
            <View style={{ marginTop: 20 }}>
              <ProductCarousel data={this.state.recentProducts} />
            </View>
          </View>
          <View style={{ height: 50 }} />
        </ScrollView>
        <View style={styles.section2}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => this.onAddToCartPres()}
          >
            <View style={{ justifyContent: "center" }}>
              <Image source={Images.cart} style={{ width: 20, height: 20 }} />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.tabLabel}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, styles.divider]}
            onPress={() => this.setState({ showPopup: true, for: "wishlist" })}
          >
            <View style={{ justifyContent: "center" }}>
              <Image source={Images.heartWhite} style={styles.tabIcon} />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.tabLabel}>Add to Wishlist</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
