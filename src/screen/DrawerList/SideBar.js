import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,  Footer, Left, Right, Card,CardItem, Text,Body,  Container,Thumbnail,  List,  ListItem,  Content, View,Icon
} from "native-base";

const routes = [{name: "Profile",icon: 'contact'},{name: "Lists", icon: 'list-box'},{name: "Moments",icon: 'flash'}, {name: 'Highlights',icon:'pricetags'} ];
let userdetails='';
export default class SideBar extends React.Component {
 
  constructor() {
    super();
    
    userdetails = {
          username: 'Raziya Sultana',
          userid: 'RaziyaSultana97',
          following: 300,
          followers: 5,
          thumbnail: '../../img/img11.jpg',
        };
        console.log(userdetails + 'user');
  }

  render() {
    const {username, userid,thumbnail,following,followers} = userdetails;
    console.log(username);
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
              <View style = {{flex: 1,
        flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('../../img/img11.jpg')} />
            
              
                
                  <Text style={{fontWeight: 'bold'}}>{username}</Text>
                  <Text note>{userid}</Text>
                  
              
            <View style = {{flexDirection: 'row'}} >
              <Text>{following} Following </Text>
                  <Text >{followers} Followers</Text>
                  </View>
                  </View>
             </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(data.name)}
                  icon
                  
                >
                <Left>
                <Icon name={data.icon}/>
                {/* <Icon name="plane" /> */}
              </Left>
              <Body>
              <Text>{data.name}</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
          />
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <ListItem icon >
          <Left >
            <Icon name="moon" style={{color:'black'}}  />
          </Left>
          <Body>
          </Body>
          <Right  >
            <Icon name="apps" style={{color:'black'}} />
          </Right>
        </ListItem>
        </Content>
      </Container>
    );
  }
}