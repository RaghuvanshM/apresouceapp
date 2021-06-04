import React from 'react';
import { Component } from 'react';
import {Text,Image } from 'react-native'
class Test extends Component {
    
    render(){
        const url ='https://devb2bapi.singlaapparels.com/images/categories/two.jpg'
        return(
            <Image
          source={{uri:url}}
          style={{
            resizeMode: 'cover',
            width: '20%',
            height: '30%',
          }}
        />
        )
    }
}
export default Test