import React from 'react';
import { Image, View } from 'react-native';
import {  Card,Content,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';
import UserDetails from './Users';
//import { UserDetails } from '';
const Item = Picker.Item;
const CardBody = () => {

    return ( 
      <Content>   
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../img/ph1.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                 <UserDetails
                   titleText="Caring Heart"
                   bodyText="This FlowerAura exclusive arrangement consists of a beautiful heart shaped arrangement." 
                   twitterName='MyTwitterID'
                   lastSeenTime='10m'/>
                <Icon name='arrow-dropdown'/>
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
 
                {/* <Image source={{uri: ''}}/> */}
                <Image source={require('../img/ph2.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>
              <Left>
               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={ styles.buttonTextStyle }>60</Text>
               </Button>
              </Left>
           
             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={ styles.buttonTextStyle } >2</Text>
              </Button>
              <Text style={{width:35}}>

                </Text>
                               
               <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={ styles.buttonTextStyle }>19</Text>
               </Button>
            
                <Right>
               <Button default small transparent>
                 <Icon name="mail" />
                 </Button>
                 </Right>

           </CardItem>
         </Card>
         <Card>
         <CardItem>
           <Left>
             <Thumbnail source={require('../img/ph4.jpg')} />
          
             <Body style ={{flexDirection: 'row'}}>
               <UserDetails
                 titleText="Rainbow"
                 bodyText="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky.."
                 twitterName='MyTwitterID'
                 lastSeenTime='10m'/>
              <Icon name='arrow-dropdown'/>
        </Body>
        
           </Left>
           
           
           
         </CardItem>
         <CardItem cardBody>

              {/* <Image source={{uri: ''}}/> */}
              <Image source={require('../img/ph3.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
            
          </CardItem>
         <CardItem style={{justifyContent: 'flex-end'}}>
            <Left>
             <Button small iconLeft transparent>
               <Icon name="text" />
               <Text style={ styles.buttonTextStyle }>60</Text>
             </Button>
            </Left>
         
           <Button small iconLeft transparent>
              <Icon name="git-compare" />
              <Text style={ styles.buttonTextStyle } >2</Text>
            </Button>
            <Text style={{width:35}}>

              </Text>
                             
             <Button small iconLeft transparent>
               <Icon name="heart" />
               <Text style={ styles.buttonTextStyle }>19</Text>
             </Button>
          
              <Right>
             <Button default small transparent>
               <Icon name="mail" />
               </Button>
               </Right>

         </CardItem>
       </Card>
       </Content>
       
     );
   };

     const styles = {
          buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          }

     };

export default  CardBody;