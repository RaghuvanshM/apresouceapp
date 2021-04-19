import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import VerifyOtp from '../screens/VerifyOtp/VerifyOtp';
import AddAccountInfo from '../screens/AddAccountInfo/AddAccountInfo';
import Greeting from '../screens/Greeting/Greeting';

const Stack = createStackNavigator();
function authStack() {
    return (
        <Stack.Navigator initialRouteName="loginScreen" headerMode="screen">
            <Stack.Screen name="loginScreen" component={Login} options={{title:'',headerShown:false}} />
            <Stack.Screen name="verifyScreen" component={VerifyOtp} options={{title:'',headerShown:false}} />
            <Stack.Screen name="addAccountInfoScreen" component={AddAccountInfo} options={{title:'',headerShown:false}} />
            <Stack.Screen name="greetingScreen" component={Greeting} options={{title:'',headerShown:false}} />

        </Stack.Navigator>
    )
}

export default authStack;
