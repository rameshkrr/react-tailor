import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
	Image,
	TouchableHighlight,
    ToolbarAndroid,
	FlatList,
	ScrollView,
	AsyncStorage
    
} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from "react-navigation";
import {Icon, Button, Container, Header, Content,Left ,Right,Item,Input,Card,CardItem} from 'native-base'
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons'

import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import * as CartAction from '../actions/CartActions';

class Success extends Component {
	
    render() {
    return (
      <View style={styles.wrapper}>
       <Text style={{textAlign:'center'}}>Product ordered Successfully</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'flex-start', //replace with flex-end or center
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  container2: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'flex-start' //replace with flex-end or center
  },
  box: {
    width: 100,
    height: 100
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});



export default Success;