import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Images from '../../utils/Images';
import Header from '../Header/Header';
import styles from './style';

export default class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        policies: [
          {id: 1, title: 'Returns'},
          {id: 2, title: 'Refunds'},
          {id: 3, title: 'Cancellation'},
          {id: 4, title: 'Shipping'},
          {id: 5, title: 'Payments'},
          {id: 6, title: 'Offers & Discounts'},
          {id: 7, title: 'Warrenty'},
          {id: 8, title: 'Privacy'},
          {id: 9, title: 'Cookies'},
          {id: 10, title: 'Terms & Conditions'},
          {id: 11, title: 'Complaints'},
          {id: 12, title: 'Wholesale Enquries'},
        ],
      };
  }
  renderPolicies = ({item}) => {
    return (
      <View style={styles.policy}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.label}>{item.title}</Text>
        </View>
        <View style={{justifyContent: 'center', marginLeft: 15}}>
          <Image source={Images.arrowDown} style={styles.arrowDown} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Policies'} {...this.props} cart={true}/>
        <FlatList
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 15,marginBottom:20}}
          data={this.state.policies}
          renderItem={this.renderPolicies}
          keyExtractor={(item) => item.id + item.title}
        />
      </View>
    );
  }
}
