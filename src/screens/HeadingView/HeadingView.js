import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Images from '../../utils/Images';
import styles from './style';

const HeadingView = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Image source={Images.divider1} style={styles.line} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={{justifyContent: 'center', flex: 1}}>
        <Image source={Images.divider2} style={styles.line} />
      </View>
    </View>
  );
};

export default HeadingView;
