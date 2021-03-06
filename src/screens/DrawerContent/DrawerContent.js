import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Images from '../../utils/Images';
import styles from './style';
import moment from 'moment';
import AppviewModel from '../../utils/AppviewModel';

import {connect} from 'react-redux'


 class DrawerContent extends Component {
  tabs = [
    {id: 1, title: 'Past Orders', image: Images.pastOrders},
    {id: 2, title: 'Payment Ledger', image: Images.paymentLedger},
    {id: 3, title: 'Support', image: Images.support},
    {id: 4, title: 'Policies', image: Images.policies},
    {id: 5, title: 'Terms of Use', image: Images.terms},
    {id: 6, title: 'About Singla Apparels', image: Images.about},
    {id: 7, title: 'Logout', image: Images.cross},
  ];

  redirect = (id) => {
    switch (id) {
      case 1:
        this.props.navigation.navigate('pastOrdersScreen');
        break;
      case 2:
        this.props.navigation.navigate('paymentLedgerScreen');
        break;
      case 3:
        this.props.navigation.navigate('supportScreen');
        break;
      case 4:
        this.props.navigation.navigate('policiesScreen');
        break;
      case 5:
        this.props.navigation.navigate('termsScreen');
        break;
      case 6:
        this.props.navigation.navigate('aboutScreen');
        break;
      case 7:
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('user');
        this.props.navigation.navigate('authStack');
        break;
    }
  };

  componentDidMount(){
    console.log("userInfo@@",this.props.user.ConsumerID);
  }

  render() {
    const userInfo  = this.props.user;
    return (
      <View style={styles.container}>
        {Platform.OS == 'ios' &&<View style={styles.iosHeader} />}
        <View style={styles.header}>
          <View style={styles.profileImage}>
            <Image source={Images.profileIcon} style={styles.img} />
          </View>
          <Text style={styles.name}>{userInfo.CompanyName}</Text>
          <Text style={[styles.name,{fontSize:12,marginTop:0}]}>{userInfo.FName}</Text>
          <Text style={styles.custId}>Customer ID : {userInfo.ID}</Text>
          <Text style={styles.join}>Joined : {moment(userInfo.EntryTime).format('D.MM.YYYY')}</Text>
        </View>
        <View style={styles.tabSection}>
          {this.tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}??
                onPress={() => this.redirect(item.id)}
                style={[
                  styles.tab,
                  index == this.tabs.length - 1 ? {borderBottomWidth: 0} : {},
                ]}>
                <View style={styles.tabIconContainer}>
                  <Image source={item.image} style={styles.tabIcon} />
                </View>
                <View style={styles.tabLabelContainer}>
                  <Text style={styles.tabLabel}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps, 
)(DrawerContent);