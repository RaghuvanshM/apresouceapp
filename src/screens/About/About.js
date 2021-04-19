import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../Header/Header';
import styles from './style';

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title={'About Us'} {...this.props} cart={true} />
        <View style={styles.section1}>
          <Text style={styles.label}>
            Launched by Mr. J C Singla, a visionary and a great entrepreneur, in
            1967, La Scoot has traversed 50 glorious years. With a humble start
            in Amritsar Punjab with a manufacturing unit. it is today one of the
            leading Brand in men's fashion with a pan-India presence.{'\n'}{'\n'}Today, the
            company is led by the third generation of the Singla family along
            with the seasoned parents who together bring experience and new,
            fresh ideas that add zing and modern appeal to the brand La' Scoot.
            Together they make a formidable team ensuring growth and success at
            every level.{'\n'}{'\n'}The company launched Men’s Celebration wear brand “La’
            Scoot” in 1994 and today has a pan- India presence of more than 2500
            retailers, wholesalers, distributors on board.
          </Text>
        </View>
      </View>
    );
  }
}
