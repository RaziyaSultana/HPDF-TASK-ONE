/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , PropType} from 'react';
import {
  Platform,View
 } from 'react-native';

import { Container,Tab,Item, Input,Footer,Picker,Text,Content,Tabs ,TabHeading,Image,StyleProvider,Drawer,Body,Header,Title,Button,Left,Icon} from 'native-base';
import {Router, Actions,Scene} from 'react-native-router-flux';

//import getTheme from './native-base-theme/components';
//import commonColor from './native-base-theme/variables/commonColor';



import HomeScreenRouter from './src/screen/HomePage/index';
import HomeScreen from './src/screen/HomePage/HomePage';

import Message from './src/screen/HomePage/msg';


export default class App extends Component {
  
  render() {
    
    return <HomeScreenRouter/>;
  }
}

