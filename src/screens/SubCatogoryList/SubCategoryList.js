import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "../Header/Header";
import styles from "./style";
import SubCategoryWidget from "./SubCategoryWidget/SubcategoryWidget";

export default class SubCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategories: [
        { id: 1, title: "Indo-Western Kurta" },
        { id: 2, title: "Fancy Kurta" },
        { id: 3, title: "Straight Kurta" },
        { id: 4, title: "Jodhpuri Kurta" },
        { id: 5, title: "Wedding Kurta" },
      ],
    };
  }

  renderList = ({ item, index }) => {
    return <SubCategoryWidget data={item} index={index} {...this.props}/>;
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          title={this.props.route.params.title + " Collections"}
          {...this.props} cart={true} wishlist={true}
        />
        <View style={styles.section1}>
          <FlatList
            showsVerticalScrollIndicator={false}            
            contentContainerStyle={{ paddingBottom: 10, paddingHorizontal:10 }}
            data={this.state.subCategories}
            renderItem={this.renderList}
            numColumns={2}
            keyExtractor={(item) => item.id + item.title}
          />
        </View>
      </View>
    );
  }
}
