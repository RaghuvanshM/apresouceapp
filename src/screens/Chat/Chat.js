import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import MainHeader from '../MainHeader/MainHeader';
import styles from './style';

export default class Chat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.circle}>
              <Image source={Images.call} style={styles.circleIcon} />
            </View>
            <Text style={styles.label}>Get a Call back</Text>
          </View>
          <View>
            <View style={styles.circle}>
              <Image source={Images.chat1} style={styles.circleIcon} />
            </View>
            <Text style={styles.label}>Chat with us</Text>
          </View>
          <View>
            <View style={styles.circle}>
              <Image source={Images.whatsapp} style={styles.circleIcon} />
            </View>
            <Text style={styles.label}>Connect in Whatsapp</Text>
          </View>
          <View style={styles.containerBottom}>
            <View style={{justifyContent: 'center', flex: 1}}>
              <Image source={Images.divider1} style={styles.line} />
            </View>
            <View style={{justifyContent: 'center',marginHorizontal:10}}>
            <View style={[styles.circle,{marginTop:0}]}>
              <Image source={Images.chatCircle} style={styles.circleIcon} />
            </View>
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <Image source={Images.divider2} style={styles.line} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
