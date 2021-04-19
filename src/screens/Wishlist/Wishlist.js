import React, { Component } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import SubCategoryWidget from "../SubCatogoryList/SubCategoryWidget/SubcategoryWidget";
import styles from "./style";

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  renderList = ({ item, index }) => {
    return (
      <SubCategoryWidget
        data={item}
        index={index}
        {...this.props}
        showWishlistOptions={true}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Wishlist"} {...this.props} cart={true} />
        <View style={styles.section1}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 20,marginTop:5 }}
            contentContainerStyle={{ paddingBottom: 10,paddingHorizontal:10 }}
            data={this.state.data}
            renderItem={this.renderList}
            numColumns={2}
            keyExtractor={(item) => item.id + item.title}
          />
        </View>
      </View>
    );
  }
}
