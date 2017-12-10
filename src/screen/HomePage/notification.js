

import React, { Component } from 'react';
import { 
  Text,Image,View
} from 'react-native';
import AppFooter from '../../components/appFooter';
 
import {  Content,Body,Footer,Header,Icon } from 'native-base';


export default class Notification extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon ios='ios-notifications' android='md-notifications' style={{color: tintColor}} />
  ),
   } 
  render(){
    return (
     
        
         <Content >
         <View style={{alignItems: 'center',flex:2, 
                       height: 490,backgroundColor:'#e1e3ed',
                        flexDirection: 'column',
                       justifyContent: 'center'}} >
          <Text style={ {color: 'blue',
                         fontWeight: 'bold',
                        fontSize: 30}}>Nothing to see here</Text> 
        <Text style={ {color: 'blue',
                         fontWeight: 'bold',
                        fontSize: 30}}>Yet</Text> 
        <Text style={ {color: 'black',
                        fontSize: 20,alignItems: 'center'}}>
                     From Retweet to likes and a Whole lot more,</Text> 
          <Text style={ {color: 'black',
                        fontSize: 20,alignItems: 'center'}}>
                        this is wher all the action happens about</Text>
           <Text style={ {color: 'black',
                        fontSize: 20,alignItems: 'center'}}> 
                        Tweets and followers.You'll like it here</Text>
          
         
    
    
         </View>
         
           <AppFooter/>
          </Content>
        
    
        
     );
  }
}
module.export=Notification;