import React, { Component } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import StylesCartWidget from "../StylesCart/StylesCartWidget/StylesCartWidget";
import styles from "./style";
import AppviewModel from "../../utils/AppviewModel";


export default class StylesWishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      isloading:false,
      wishlistStyleData:[]
    };
  }

  getWishlistStyle = () => {
    this.setState({ isloading: true })
    let payload = {
      subcategory_id: this.props.route.params.id
    }
    AppviewModel.sendApiCall(
      "/wishlist/getstyles",
      payload,
      null,
      (response) => {
        if (response.status === "Success") {
          console.log('/wishlist/getstyles',response)
          this.setState({
            wishlistStyleData: response.data,
            isloading: false
          })
        }
      },
      (error) => {
        console.log(error);
        this.setState({
          isloading: false
        })
      }
    );
  }
  componentDidMount(){
    this.getWishlistStyle()
  }
  renderList = ({ item, index }) => {
     return <StylesCartWidget data={item} index={index} {...this.props}  showWishlistOptions={true}  />;
  };

  render() {
    let {wishlistStyleData} = this.state
     return (
      <View style={styles.container}>
        <Header title={"Styles"} {...this.props} cart={true} />
        <View style={styles.section1}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 20, marginTop: 5 }}
            contentContainerStyle={{ paddingBottom: 10, paddingHorizontal: 10 }}
            data={wishlistStyleData.length>0 && wishlistStyleData}
            renderItem={this.renderList}
            numColumns={2}
            keyExtractor={(item) => item.id + item.title}
          />
        </View>
      </View>
    );
  }
}
