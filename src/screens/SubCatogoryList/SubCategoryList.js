import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import Header from "../Header/Header";
import styles from "./style";
import SubCategoryWidget from "./SubCategoryWidget/SubcategoryWidget";
import AppviewModel from "../../utils/AppviewModel";
import ProgressDialog from "../../controls/ProgressDialog";
import Images from "../../utils/Images";

export default class SubCategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // subCategories: [
      //   { id: 1, title: "Indo-Western Kurta" },
      //   { id: 2, title: "Fancy Kurta" },
      //   { id: 3, title: "Straight Kurta" },
      //   { id: 4, title: "Jodhpuri Kurta" },
      //   { id: 5, title: "Wedding Kurta" },
      // ],
      subCategories: [],
      page: 0,
      isLoading: false,
      DataFound: true,
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
    const { page, subCategories } = this.state;

    this.setState({ isLoading: true });

    var payload = {
      category_id: this.props.route.params.id,
      page_size: 20,
      page_index: page,
    };
   
    AppviewModel.sendApiCall(
      "/subcategories",
      payload,
      null,
      (response) => {
      
        this.setState({
          subCategories:
            page === 0 ? response.data : [...subCategories, ...response.data],
          isLoading: false,
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

  renderList = ({ item, index }) => {
    return <SubCategoryWidget data={item} index={index} {...this.props} />;
  };
  render() {
    const { isLoading, subCategories, page } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title={this.props.route.params.title + " Collections"}
          {...this.props}
          cart={true}
          wishlist={true}
        />
        <View style={styles.section1}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 10,
              paddingHorizontal: 10,
              flexGrow: 1,
            }}
            data={subCategories}
            renderItem={this.renderList}
            numColumns={2}
            keyExtractor={(item) => item.id + item.title}
            onEndReachedThreshold={0}
            onEndReached={this.LoadMoreRandomData}
            ListEmptyComponent={this._listEmptyComponent}
          />
        </View>

        {isLoading && page !== 0 && (
          <ActivityIndicator
            color="#fb3b3bff"
            style={{
              marginLeft: 8,
              position: "absolute",
              bottom: 10,
              alignSelf: "center",
            }}
          />
        )}

        {isLoading && page == 0 && <ProgressDialog loading={isLoading} />}
      </View>
    );
  }
}
