import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ActivityIndicator
} from "react-native";
import Button from "../../controls/Button/Button";
import Popup from "../../controls/Popup/Popup";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import SubCategoryWidget from "../SubCatogoryList/SubCategoryWidget/SubcategoryWidget";
import styles from "./style";
import AppviewModel from "../../utils/AppviewModel";
import SubcategoryCard from './Subcategorycard/Subcategorycard'
import { Fragment } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      data: [
        {
          id: 1,
          title: "Kurta",
          styles: [{ colors: [1, 2, 3] }, { colors: [1, 2, 3] }],
        },
        {
          id: 2,
          title: "Blazer",
          styles: [{ colors: [1, 2, 3] }, { colors: [1, 2, 3] }],
        },
        {
          id: 3,
          title: "Sherwani",
          styles: [{ colors: [1, 2, 3] }, { colors: [1, 2, 3] }],
        },
      ],
      carData: [],
      isloading: false
    };
  }
  getCartSubCategory = () => {
    this.setState({ isloading: true })
    AppviewModel.sendApiCall(
      // "/ocassions/get",  
      "/cart/getsubcategories",
      null,
      'GET',
      (response) => {
      
        this.setState({
          carData: response.data,
          isloading: false
        })
      },
      (error) => {
        console.log(error);
        this.setState({
          isloading: false
        })
      }
    );
  }

  componentDidMount() {
    this.getCartSubCategory()
  }
  renderList = ({ item, index }) => {
    return (
      <SubcategoryCard
        data={item}
        index={index}
        {...this.props}
        showCartOptions={true}
      />
    );
  };

  closePopup = () => {
    this.setState({ showPopup: false }, () => {
      this.props.navigation.navigate("homeTabNavigator");
    });
  };

  render() {
    let { carData, isloading } = this.state;
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
          <Header title={"Cart"} {...this.props} wishlist={true} />
          
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
              contentContainerStyle={{ paddingBottom: 10, paddingHorizontal: 10 }}
              data={carData}
              renderItem={this.renderList}
              numColumns={2}
              keyExtractor={(item) => item.id + item.title}
            />
          </View>
          {carData.length <= 0 && (
            <View style={styles.emptyCartSection}>
              <Image source={Images.emptyCart} style={styles.img} />
              <Text style={styles.label1}>Your Cart is Emplty!</Text>
              <Text style={styles.label2}>
                Explore More and shortlist some items.
            </Text>
            </View>
          )}
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
