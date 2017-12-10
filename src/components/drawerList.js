import React, { Component } from 'react';
import { Container, Header, Card,Button, CardItem, Content, Image, List, Thumbnail, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import Profile from './drawerPges/profile';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import { AppRegistry,View } from 'react-native';

 


  class Sidepg extends Component {
    
  render(){
    const { navigate } = this.props.navigation;
    return (
      <Content>
        <Card >
          <CardItem >
            <Left>
              <Thumbnail source={require('../img/images.jpg')} />
              <Body>
                <Text>RaziyaSultana</Text>
                <Text note>Intern</Text>
              </Body>
            </Left>
          </CardItem>
          <Body>
            <Text>133 Following</Text>
            <Text>5 Followers</Text>
          </Body>
          </Card>
          <Card>
        <List >
          <ListItem icon >
            <Left >
              <Icon name="person" />
            </Left>
            <Body>
              <Text onPress={() =>navigate('Profile')}>Profile</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon >
            <Left >
              <Icon name="list-box" />
            </Left>
            <Body>
              <Text>List</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem >
          <ListItem icon >
            <Left >
              <Icon name="photos" />
            </Left>
            <Body>
              <Text>Highlights</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon >
            <Left>
              <Icon name="flash" />
            </Left>
            <Body>
              <Text>Moments</Text>
            </Body>
          </ListItem>
          <ListItem icon>
           
              <Button transparent >
                <Text style={{color:'black'}}>
                Settings and privacy
                 </Text>
                 </Button>
           
          </ListItem>
          <ListItem icon >
          <Button transparent >
                <Text style={{color:'black'}}>
                Help center
                 </Text>
                 </Button>
           
          </ListItem>
          <ListItem icon >
            <Left >
              <Icon name="moon" style={{color:'#1b0e75'}}  />
            </Left>
            <Body>
            </Body>
            <Right  >
              <Icon name="apps" style={{color:'#1b0e75'}} />
            </Right>
          </ListItem>
        </List>
        </Card>
      </Content>

  
     );
  }
  }




export default class SideBar extends Component {
  static navigationOptions = {
    title: 'WELCOME',
  };
  render() {
    
 //const { navigate } = this.props.navigation;
      
    return (
     <SimpleApp/>
    );
  }
  }


module.export = SideBar;


/*const myDrawer=DrawerNavigator({
  Home: { screen:Sidepg},
  Profile:{screen:Profile},  

});

const SimpleApp = StackNavigator({
  Home: { screen:myDrawer},
  
  });
  */


const SimpleApp = StackNavigator({
  Home: { screen:Sidepg},
  Profile:{screen:Profile},
  });

