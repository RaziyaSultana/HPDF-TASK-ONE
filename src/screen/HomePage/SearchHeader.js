import React from 'react';
import { Text,TextInput, View } from 'react-native';
import { Container,Title,Content, Left,Right,Body, Header,Item,Icon,Input,Button} from 'native-base';
//import default from '../../../native-base-theme/variables/material';

//make functional component
const SearchHeader = (props) => {
//destructuring to use styles so that to call textStyle do not need to do styles.textStyle
  const { textStyle, viewStyle } = styles;
  const {navigation} =props;
  //props example style used
  return (
  
  <Header searchBar  rounded style={{backgroundColor:'white'}}>
  <Left>
    <Button
        transparent 
        onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon name="menu" style={{color: 'blue'}} />
    </Button>
    </Left>
   
<Item style={{width:280, backgroundColor: 'lightgrey'}}>
     <Icon name="ios-search" />
    <Input placeholder="Search"/>
    <Icon name="ios-people" />
      </Item>
    
  
</Header>
  );
};

//new object styles created for diff style components camelcse instead of css selectors
const styles = {
  viewStyle: { backgroundColor: '#B7CEEC',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 10,
  shadowColor: 'red', //000 for black
  shadowOffset: { width: 10, height: 20 },
  shadowOpacity: 1,
  elevation: 10,
  position: 'relative'
 },
  textStyle: { fontSize: 20 }
};

//make component available to other parts of app

export default SearchHeader;