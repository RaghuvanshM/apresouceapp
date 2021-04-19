import React,{Component} from 'react';
import {View,Text, Image, TouchableOpacity,Platform, StatusBar} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import styles from './style';

export default class MainHeader extends Component {
    constructor(props){
        super(props);
    }

    openDrawer(){
      this.props.navigation.openDrawer();
    }
    render(){
        return (
          <View style={styles.container}>
            <StatusBar backgroundColor={Colors.themeColor1}/>
            {Platform.OS == 'ios' && <View style={styles.iosMargin} />}
            <View style={styles.header}>
              <TouchableOpacity onPress={()=>this.openDrawer()} style={styles.drawerOpenContainer}>
                <Image source={Images.lines} style={styles.drawerIcon} />
              </TouchableOpacity>
              <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <View style={styles.searchIconContainer}>
                        <Image source={Images.magnifier} style={styles.magnifier}/>
                    </View>
                    <View style={styles.searchTextContainer}>
                        <TextInput placeholder={'Search'} placeholderTextColor={Colors.themeColor1} style={styles.searchText}/>
                    </View>
                </View>
              </View>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('cartScreen')} style={styles.cartContainer}>
                <Image source={Images.cart} style={styles.cartIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('wishlistScreen')} style={styles.wishlistContainer}>
                <Image source={Images.heartWhite} style={styles.wishlistIcon} />
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}