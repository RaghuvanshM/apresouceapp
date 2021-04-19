import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Images from '../../utils/Images';
import MainHeader from '../MainHeader/MainHeader';
import HeadingView from '../HeadingView/HeadingView';
import styles from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 1, title: 'BLAZER', image: Images.cat1},
        {id: 2, title: 'KURTA', image: Images.cat2},
        {id: 3, title: 'SHERWANI', image: Images.cat3},
        {id: 4, title: 'BLAZER', image: Images.cat4},
      ],
      trends: [
        {id: 1, title: '', image: Images.cat1},
        {id: 2, title: '', image: Images.cat2},
        {id: 3, title: '', image: Images.cat3},
      ],
      occasions: [
        {id: 1, title: '', image: Images.cat1},
        {id: 2, title: '', image: Images.cat2},
        {id: 3, title: '', image: Images.cat3},
        {id: 4, title: '', image: Images.cat3},
        {id: 5, title: '', image: Images.cat1},
        {id: 6, title: '', image: Images.cat2},
        {id: 7, title: '', image: Images.cat3},
        {id: 8, title: '', image: Images.cat3},
      ],
      buyTheDays: [
        {id: 1, title: 'Engagement', image: Images.cat1},
        {id: 2, title: 'Sangeet', image: Images.cat2},
        {id: 3, title: 'Wedding', image: Images.cat3},
      ],
    };
  }

  renderCategory = (category, index) => {
    return (
      <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('subCategoryListScreen',{title:category.title})}}key={category.id} style={styles.category}>
        <View style={styles.catImage} />
        <Text style={styles.catLabel}>{category.title}</Text>
      </TouchableOpacity>
    );
  };

  renderTrend = (occasion, index) => {
    return (
      <View key={occasion.id} style={styles.trend}>
        <View style={styles.trendImage} />
      </View>
    );
  };

  renderOccasion = (occasion, index) => {
    return (
      <View
        key={occasion.id}
        style={[styles.occasion, index % 4 == 0 ? {marginRight: 0} : {}]}>
        <View style={styles.occImage} />
      </View>
    );
  };

  renderBuyTheDay = (buyTheDay, index) => {
    return (
      <View key={buyTheDay.id} style={styles.buyTheDay}>
        <View style={styles.buyTheDayImage} />
        <Text style={styles.buyTheDayLabel}>{buyTheDay.title}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <MainHeader {...this.props} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bannerSection}>
            <Image source={Images.banner} style={styles.banner} />
          </View>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('kycScreen')} style={styles.kycInfoSection}>
            <Text style={styles.kycHeading}>COMPLETE SHOP'S KYC</Text>
            <Text style={styles.kycLabel}>
              kyc is needed so that only shop owners like you can see wholesale
              prices and not your shop's customers
            </Text>
          </TouchableOpacity>
          <View style={styles.categoriesSection}>
            <HeadingView title={'Categories'} />
            <View style={styles.categories}>
              {this.state.categories.map((item, index) => {
                return this.renderCategory(item, index);
              })}
            </View>
          </View>
          <View style={styles.trendsSection}>
            <HeadingView title={'Trends'} />
            <View style={styles.trends}>
              {this.state.trends.map((item, index) => {
                return this.renderTrend(item, index);
              })}
            </View>
          </View>
          <View style={styles.occasionsSection}>
            <HeadingView title={'Occasions'} />
            <View style={styles.occasions}>
              {this.state.occasions.map((item, index) => {
                return this.renderOccasion(item, index);
              })}
            </View>
          </View>
          <View style={styles.redStrip}>
            <Text style={styles.redStripLabel}>Upto 90% Retailer margin</Text>
          </View>
          <Image source={Images.uptoBanner} style={styles.uptoBanner}/>
          <View style={styles.buyTheDaySection}>
            <HeadingView title={'Buy the Day'} />
            <View style={styles.buyTheDays}>
              {this.state.buyTheDays.map((item, index) => {
                return this.renderBuyTheDay(item, index);
              })}
            </View>
          </View>
          <Image source={Images.luxury} style={styles.luxury}/>
          <Image source={Images.uploadKyc} style={styles.uploadKyc}/>
          <Text style={styles.label10}>Unlock Prices of 50,000+ listing</Text>
        </ScrollView>
      </View>
    );
  }
}
