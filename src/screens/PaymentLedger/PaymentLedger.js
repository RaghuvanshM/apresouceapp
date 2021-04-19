import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Images from '../../utils/Images';
import Header from '../Header/Header';
import styles from './style';
import moment from 'moment';
import Button from '../../controls/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PaymentLedger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        {
          id: 1,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 1,
        },
        {
          id: 2,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 1,
        },
        {
          id: 3,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 2,
        },
        {
          id: 4,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 1,
        },
        {
          id: 5,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 2,
        },
        {
          id: 6,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 2,
        },
        {
          id: 7,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 1,
        },
        {
          id: 8,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 1,
        },
        {
          id: 9,
          date: new Date(),
          desc: 'MMT/IMPS/9980769876/NA/Suman Kumar/HDF000',
          amount: 6453,
          type: 2,
        },
      ],
    };
  }

  renderTransactions = ({item}) => {
    return (
      <View style={styles.transaction}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={styles.time}>
            {moment(item.date).format("D MMM [']Y")}
          </Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.amount}>{item.amount}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={[styles.type, item.type == 1 ? {color: 'red'} : {}]}>
            {this.renderType(item.type)}
          </Text>
        </View>
      </View>
    );
  };

  renderType(key) {
    switch (key) {
      case 1:
        return 'Dr.';
        break;
      case 2:
        return 'Cr.';
        break;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Payment ledger'} {...this.props} />
        <View style={styles.section1}>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.label}>Select Order - </Text>
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <View style={styles.picker}>
                <Image source={Images.arrowDown} style={styles.arrow} />
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.label}>Client ID - ANON567676</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <Text style={styles.label}>Total - <Icon name="rupee"/> 34,876</Text>
            </View>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.tab}>
            <Text style={styles.tabLabel}>Last 10{'\n'}Transactions</Text>
          </View>
          <View style={styles.selectedTab}>
            <Text style={[styles.tabLabel, {color: '#fff'}]}>
              Detailed{'\n'}Ledger
            </Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabLabel}>More{'\n'}Options</Text>
          </View>
        </View>
        <View style={styles.section3}>
          <FlatList
            data={this.state.transactions}
            renderItem={this.renderTransactions}
            keyExtractor={(item) => item.id + ''}
          />
        </View>
        <View style={styles.section4}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Button title="View PDF" style={{alignSelf:'flex-end',width:180,marginRight:5}}/>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Button title="Send over email" style={{marginLeft: 5,alignSelf:'flex-start',width:180}} />
          </View>
        </View>
      </View>
    );
  }
}
