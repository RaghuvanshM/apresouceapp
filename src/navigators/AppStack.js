import React,{ Component } from 'react';
import DrawerContent from '../screens/DrawerContent/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeTabNavigator from './HomeTabNavigator';
import PastOrders from '../screens/PastOrders/PastOrders';
import OrderDetails from '../screens/OrderDetails/OrderDetails';
import PaymentLedger from '../screens/PaymentLedger/PaymentLedger';
import Support from '../screens/Support/Support';
import Policies from '../screens/Policies/Policies';
import Terms from '../screens/Terms/Terms';
import About from '../screens/About/About';
import Cart from '../screens/Cart/Cart';
import Wishlist from '../screens/Wishlist/Wishlist';
import Kyc from '../screens/Kyc/Kyc';
import SubCategoryList from '../screens/SubCatogoryList/SubCategoryList';
import StylesList from '../screens/StylesList/StylesList';
import ColorsList from '../screens/ColorsList/ColorsList';
import StylesCart from '../screens/StylesCart/StylesCart';
import ColorsCart from '../screens/ColorsCart/ColorsCart';
import StylesWishlist from '../screens/StylesWishlist/StylesWishlist';
import ColorsWishlist from '../screens/ColorsWishlist/ColorsWishlist';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppStack(){
    return (
        <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />} 
        drawerStyle={{width:'80%'}} headerMode="none">
            <Drawer.Screen name="DrawerStack" component={tempStack} options={{gestureEnabled:true,title:'',headerShown:false}}/>
        </Drawer.Navigator>
    );
}

function tempStack() {
    return (
        <Stack.Navigator  initialRouteName="homeTabNavigator" headerMode="screen">
            <Stack.Screen name="homeTabNavigator" component={HomeTabNavigator} options={{title:'',headerShown:false}} />
            <Stack.Screen name="pastOrdersScreen" component={PastOrders} options={{title:'',headerShown:false}} />
            <Stack.Screen name="orderDetailsScreen" component={OrderDetails} options={{title:'',headerShown:false}} />
            <Stack.Screen name="paymentLedgerScreen" component={PaymentLedger} options={{title:'',headerShown:false}} />
            <Stack.Screen name="supportScreen" component={Support} options={{title:'',headerShown:false}} />
            <Stack.Screen name="policiesScreen" component={Policies} options={{title:'',headerShown:false}} />
            <Stack.Screen name="termsScreen" component={Terms} options={{title:'',headerShown:false}} />
            <Stack.Screen name="aboutScreen" component={About} options={{title:'',headerShown:false}} />
            <Stack.Screen name="cartScreen" component={Cart} options={{title:'',headerShown:false}} />
            <Stack.Screen name="stylesCartScreen" component={StylesCart} options={{title:'',headerShown:false}} />
            <Stack.Screen name="colorsCartScreen" component={ColorsCart} options={{title:'',headerShown:false}} />
            <Stack.Screen name="wishlistScreen" component={Wishlist} options={{title:'',headerShown:false}} />
            <Stack.Screen name="stylesWishlistScreen" component={StylesWishlist} options={{title:'',headerShown:false}} />
            <Stack.Screen name="colorsWishlistScreen" component={ColorsWishlist} options={{title:'',headerShown:false}} />
            <Stack.Screen name="kycScreen" component={Kyc} options={{title:'',headerShown:false}} />
            <Stack.Screen name="subCategoryListScreen" component={SubCategoryList} options={{title:'',headerShown:false}} />
            <Stack.Screen name="stylesListScreen" component={StylesList} options={{title:'',headerShown:false}} />
            <Stack.Screen name="colorsListScreen" component={ColorsList} options={{title:'',headerShown:false}} />         
        </Stack.Navigator>
    )
}

export default AppStack;
