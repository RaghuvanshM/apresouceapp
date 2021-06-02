import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash/Splash';
import AppStack from './navigators/AppStack';
import AuthStack from './navigators/AuthStack';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '../src/store/'; 


const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splashScreen" headerMode="screen">
          <Stack.Screen
            name="splashScreen"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="appStack"
            component={AppStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="authStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
   
   </PersistGate>
   </Provider>
    );
  }
}