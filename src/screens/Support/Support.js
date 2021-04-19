import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import Colors from "../../utils/Colors";
import Images from "../../utils/Images";
import Header from "../Header/Header";
import styles from "./style";

export default class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queries: [
        { id: 1, title: "Support related to Damage Product." },
        { id: 2, title: "Support related to Delivery of Product." },
        { id: 3, title: "Support related to Payments." },
        { id: 4, title: "Any Other Support." },
      ],
    };
  }

  renderQueries = ({ item }) => {
    return (
      <View style={styles.query}>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text style={styles.label}>{item.title}</Text>
        </View>
        <View style={{ justifyContent: "center", marginLeft: 15 }}>
          <Image source={Images.arrowDown} style={styles.arrowDown} />
        </View>
      </View>
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.imageSection}>
        <Image
          source={Images.customerService}
          style={styles.customerServiceImage}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Support"} {...this.props} helpIcon={true} />
        <View style={styles.searchSection}>
          <View style={styles.searchBox}>
            <View style={styles.searchIconContainer}>
              <Image source={Images.magnifier} style={styles.magnifier} />
            </View>
            <View style={styles.searchTextContainer}>
              <TextInput
                placeholder={"Search Support"}
                placeholderTextColor={Colors.themeColor1}
                style={styles.searchText}
              />
            </View>
          </View>
        </View>
        <FlatList
        contentContainerStyle={{paddingHorizontal:20,paddingBottom:30}}          
          ListHeaderComponent={this.renderHeader}
          data={this.state.queries}
          renderItem={this.renderQueries}
          keyExtractor={(item) => item.id + item.title}
        />
      </View>
    );
  }
}
