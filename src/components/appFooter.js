
import React, { Component } from 'react';
import { Content,Item,Body,Left,Right, Footer,CardItem, Input,FooterTab, Button,Card, Icon, Text } from 'native-base';
import { Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
   
  render() {
    return (
      <Card>
      <CardItem>
              <Left>
                <Button transparent active>  
                  
                  <Text>All</Text>
                </Button>
              
                <Button transparent>
                <Text>Mentions</Text>
                </Button>
                </Left>
              <Right>
              <Button transparent>
        <Icon  transparent name='settings' />
           </Button>
              </Right>
            </CardItem>
        
      
       
    
    </Card>
      
         
      
     );
  }
}
module.export=AppFooter;