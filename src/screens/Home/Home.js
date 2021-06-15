import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Images from "../../utils/Images";
import MainHeader from "../MainHeader/MainHeader";
import HeadingView from "../HeadingView/HeadingView";
import styles from "./style";
import AppviewModel from "../../utils/AppviewModel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUniqueId } from "react-native-device-info";
import AppConstants from "../../utils/AppConstants";
import HomePageLoading from "../HomePageLoading/HomePageLoading";
import { WebView } from "react-native-webview";
import FlatListSlider from "../../controls/FlatListSlider/FlatListSlider";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      configurations: null,
      categories: [],
      trends: [],
      occasions: [],
      buyTheDays: [],
      isBorder: true,
    };
  }

  componentDidMount() {
    this.setUserInApp();
    this.getLandingPageConfigurations();
    this.getCategories();
    this.getTrends();
    this.getOccasions();
    this.getByTheDays();
  }

  getLandingPageConfigurations = () => {
    this.setState({ isLoading: true });
    if (AppviewModel.getLandingPage) {
      var payload = {
        unique_id: getUniqueId(),
        app_type: AppConstants.appType,
      };

      AppviewModel.sendApiCall(
        "/get-landing-page-configurations/get-landing-page",
        payload,
        null,
        (response) => {

          this.setState({ configurations: response, isLoading: false });
          this.setLandingPageConfigurations(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      var data = AsyncStorage.getItem("landingpage_configurations");
      data = JSON.parse(data);
      this.setState({ configurations: data, isLoading: false });
    }
  };

  getCategories = () => {
    AppviewModel.sendApiCall(
      "/category/get",
      null,
      'GET',
      (response) => {

        this.setState({ categories: response.categories });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  getTrends = () => {
    AppviewModel.sendApiCall(
      "/trends/get",
      null,
      'GET',
      (response) => {
        this.setState({ trends: response.trends });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  getOccasions = () => {
    AppviewModel.sendApiCall(
      "/ocassions/get",
      null,
      'GET',
      (response) => {
        this.setState({ occasions: response.ocassions });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  getByTheDays = () => {
    AppviewModel.sendApiCall(
      "/buythedays/get",
      null,
      'GET',
      (response) => {
        console.log(response.buythedays)

        this.setState({ buyTheDays: response.buythedays });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  setLandingPageConfigurations = async (data) => {
    AsyncStorage.setItem("landingpage_configurations", JSON.stringify(data));
  };

  setUserInApp = async () => {
    var user = await AsyncStorage.getItem("user");
    user = JSON.parse(user);

    AppviewModel.loggedInUser = user;
  };

  renderCategory = (category, index) => {

    return (
      <TouchableOpacity

        onPress={() => {
          this.props.navigation.navigate("subCategoryListScreen", {
            title: category.title,
            id: category.id,
          });
        }}
        key={String(index)}
        style={styles.category}
      >
        <View style={[styles.catImage, { borderRadius: !this.state.isBorder ? 0 : 200 }]} >
          <Image source={{ uri: AppConstants.baseUrl + category.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
        <Text style={styles.catLabel}>{category.title}</Text>
      </TouchableOpacity>
    );
  };

  renderTrend = (occasion, index) => {
    return (
      <View key={String(index)} style={styles.trend}>
        <View style={styles.trendImage}>
          <Image source={{ uri: AppConstants.baseUrl + occasion.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
      </View>
    );
  };

  renderOccasion = (occasion, index) => {
    return (
      <View
        key={occasion.id}
        style={[styles.occasion, index % 4 == 0 ? { marginRight: 0 } : {}]}
      >
        <View style={styles.occImage}>
          <Image source={{ uri: AppConstants.baseUrl + occasion.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
      </View>
    );
  };

  renderBuyTheDay = (buyTheDay, index) => {
    // ImagesVideosNewsShoppingMore
    // Settings
    // Tools

    return (
      <View key={buyTheDay.id} style={styles.buyTheDay}>
        <View style={styles.buyTheDayImage}>
          <Image source={{ uri: AppConstants.baseUrl + buyTheDay.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
        <Text style={styles.buyTheDayLabel}>{buyTheDay.title}</Text>
      </View>
    );
  };

  goToWebviewAction = (action) => {
    switch (action) {
      case AppConstants.pageCodes.ProductList:
        this.props.navigation.navigate("stylesListScreen");
        break;
      case AppConstants.pageCodes.ProductDetail:
        this.props.navigation.navigate("colorsListScreen");
        break;
      case AppConstants.pageCodes.OrderDetails:
        this.props.navigation.navigate("orderDetailsScreen");
        break;
      case AppConstants.pageCodes.RecentlyViewed:
        // this.props.navigation.navigate("kycScreen");
        break;
      case AppConstants.pageCodes.LogIn:
        // this.props.navigation.navigate("kycScreen");
        break;
      case AppConstants.pageCodes.KYCVerification:
        this.props.navigation.navigate("kycScreen");
        break;
      case AppConstants.pageCodes.Wishlist:
        this.props.navigation.navigate("wishlistScreen");
        break;
      case AppConstants.pageCodes.Cart:
        this.props.navigation.navigate("cartScreen");
        break;
      case AppConstants.pageCodes.ErrorPage:
        // this.props.navigation.navigate("kycScreen");
        break;
      case AppConstants.pageCodes.Category:
        this.props.navigation.navigate("subCategoryListScreen");
        break;
      case AppConstants.pageCodes.SubCategory:
        this.props.navigation.navigate("subCategoryListScreen");
        break;
      case AppConstants.pageCodes.Home:
        this.props.navigation.navigate("homeTabNavigator");
        break;
      case AppConstants.pageCodes.Registration:
        // this.props.navigation.navigate("kycScreen");
        break;
      case AppConstants.pageCodes.Orders:
        this.props.navigation.navigate("orderDetailsScreen");
        break;
      case AppConstants.pageCodes.PaymentLedger:
        this.props.navigation.navigate("paymentLedgerScreen");
        break;
      case AppConstants.pageCodes.Support:
        this.props.navigation.navigate("supportScreen");
        break;
      case AppConstants.pageCodes.Policies:
        this.props.navigation.navigate("policiesScreen");
        break;
      case AppConstants.pageCodes.TermsOfUse:
        this.props.navigation.navigate("termsScreen");
        break;
      case AppConstants.pageCodes.AboutUs:
        this.props.navigation.navigate("aboutScreen");
        break;
    }
  };

  renderCategorySection = () => {
    return (
      <View style={styles.categoriesSection}>
        <HeadingView title={"Categories"} />
        <View style={styles.categories}>
          {this.state.categories.map((item, index) => {

            return this.renderCategory(item, index);
          })}
        </View>
      </View>
    );
  };

  renderTrendSection = () => {
    return (
      <View style={styles.trendsSection}>
        <HeadingView title={"Trends"} />
        <View style={styles.trends}>
          {this.state.trends.map((item, index) => {
            return this.renderTrend(item, index);
          })}
        </View>
      </View>
    );
  };

  renderOccasionSection = () => {
    return (
      <View style={styles.occasionsSection}>
        <HeadingView title={"Occasions"} />
        <View style={styles.occasions}>
          {this.state.occasions.map((item, index) => {
            return this.renderOccasion(item, index);
          })}
        </View>
      </View>
    );
  };

  renderByTheDaySection = () => {
    return (
      <View style={styles.buyTheDaySection}>
        <View style={styles.redStrip}>
          <Text style={styles.redStripLabel}>Upto 90% Retailer margin</Text>
        </View>
        <Image source={Images.uptoBanner} style={styles.uptoBanner} />
        <HeadingView title={"Buy the Day"} />
        <View style={styles.buyTheDays}>
          {this.state.buyTheDays.map((item, index) => {
            return this.renderBuyTheDay(item, index);
          })}
        </View>
      </View>
    );
  };

  render() {
    const screenWidth = Math.round(Dimensions.get("window").width);
    const images = [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree",
    ]
    return (
      <View style={styles.container}>
        <MainHeader {...this.props} />

        {this.state.isLoading && <HomePageLoading />}

        {!this.state.isLoading && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.bannerSection}>
              {/* <FlatListSlider
                data={images}
                timer={5000}
                onPress={(item) => alert(JSON.stringify(item))}
                indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
                indicatorActiveColor={"#8e44ad"}
                indicatorInActiveColor={"#ffffff"}
                indicatorActiveWidth={30}
                animation
              /> */}
            </View>
            <TouchableOpacity
              onPress={() =>
                this.goToWebviewAction(this.state.configurations.webview.action)
              }
              style={styles.kycInfoSection}
            >
              <WebView
                source={{ html: this.state.configurations.webview.html }}
                style={{ width: "100%", height: 70 }}
              />
            </TouchableOpacity>
            {this.state.configurations.sortorder.map((order) => {
              switch (order.section) {
                case "category_section":
                  return this.renderCategorySection();
                case "trends_section":
                  return this.renderTrendSection();
                case "occasions_section":
                  return this.renderOccasionSection();
                case "buytheday_section":
                  return this.renderByTheDaySection();
              }
            })}
            <Image source={Images.luxury} style={styles.luxury} />
            <Image source={Images.uploadKyc} style={styles.uploadKyc} />
            <Text style={styles.label10}>Unlock Prices of 50,000+ listing</Text>
          </ScrollView>
        )}
      </View>
    );
  }
}
