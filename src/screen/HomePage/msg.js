

import React, { Component } from 'react';
import {
  Text,Image,TouchableOpacity,StyleSheet 
} from 'react-native';
import AppFooter from '../../components/appFooter';

import {  Content ,Header,Title,Button,View,Icon} from 'native-base';


export default class Messages extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
    <Icon name="mail" style={{color: tintColor}} />
  ),
   }  

  render(){
    return (
        

      <Content >
         <View style={{alignItems: 'center',flex:1,height:300,
                       backgroundColor:'#0080ff',
                        flexDirection: 'column',
                       justifyContent: 'center'}} >
          <Text style={ {color: '#fff',
                         fontWeight: 'bold',
                        fontSize: 30}}>Take privately</Text> 
        <Text style={ {color: '#fff',
                         fontWeight: 'bold',
                        fontSize: 30}}>with any one </Text> 
        <Text style={ {color: '#fff',
                        fontSize: 30,
                        fontWeight: 'bold',alignItems: 'center'}}>
                     follows you.Start</Text> 
          <Text style={ {color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 30,alignItems: 'center'}}>
                       by uploading your</Text>
           <Text style={ {color: '#fff',fontWeight: 'bold',
                        fontSize: 30,alignItems: 'center'}}> 
                        contacts.</Text>
           <View style={{alignItems: 'center', 
                      backgroundColor:'#0080ff',
                        flexDirection: 'column',
                       justifyContent: 'center'}} >             
          <Button rounded light style={{color:'#fff'}}>
            <Text style={{color:'#0080ff',fontSize: 30}}>Find Friends</Text>
          </Button>
         
          </View>
         </View>
         <View  style={{alignItems: 'center',flex:2, 
                       height: 400}}>
         <TouchableOpacity style={styles.addButton}>
           <Text style={styles.addButtonText}>
          <Icon name="mail"  style={{color:'#fff'}}/>+</Text>
          </TouchableOpacity>
          </View>
         </Content>
     );
  }
}


const styles = StyleSheet.create({
  
 addButton :
  {
      position:'absolute',
      zIndex:11,
      right:20,
      bottom:150,
      backgroundColor:'#0043ca',
      width:60,
      height:60,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation: 8,
  },
  addButtonText : 
  {
      color: '#fff',
      fontSize:24,
  },
});


module.export=Messages;