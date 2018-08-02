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

class Cart extends Component {
	state={ 
        data:[]
    }

    fetchData = async() => {

        //response
        const response = await
        fetch('https://dreamdesign.rkhomeappliances.co.in/wp-json/wc/v2/products?per_page=100&consumer_key=ck_45a5668a0951cde83a24b1bedb9741604174a40b&consumer_secret=cs_c0e5f6818a54eecaf2bef01c0516821550497be9');
        //posts
        const posts = await response.json();
        this.setState({data:posts});
    }

    
    
    componentDidMount(){
        //page load
        //this.fetchData();
        //this.getCart();
		//this.props.ProductAction.getProducts();
		this.props.CartAction.getCart();
	}
	_keyExtractor = (item, index) => item.id.toString();

	removeItem(item) {
		this.props.CartAction.removeFromCart(item);
	  }
     render() {
    const { cart } = this.props;
	console.log('render cart', cart);
	const { navigate } = this.props.navigation;

    if (cart && cart.length > 0) {
      const Items = <FlatList contentContainerStyle={styles.list}
        data={cart}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <View style={styles.lineItem} >
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.name}</Text>
			<Content>
            <Text style={styles.text}>{item.quantity}</Text>
			</Content>
            <TouchableOpacity style={{ marginLeft: 'auto',marginTop:80 }} onPress={() => this.removeItem(item)}><Entypo name="cross" size={30} /></TouchableOpacity>
          </View>
        }
      />;
      return (
        <View style={styles.container}>
		  {Items}

		  <TouchableOpacity style={styles.button} underlayColor="#1f1f1f" onPress={() => navigate("Checkout")} >
                        <Text style={{ color: '#fff' }}> CHECKOUT </Text>
                    </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Cart is empty!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  lineItem: {
	flexDirection: 'row',
	marginBottom:10
  },
  list: {
    flexDirection: 'column'
  },
  image: {
    width: 150,
    height: 200,
    resizeMode:'contain',
    justifyContent:'center',
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
	padding: 5,
	marginTop:80
  },
  button: {
	alignItems: 'center',
	backgroundColor: '#4C3E54',
	paddingTop:20,
	width: '100%',
	height: 50,
	marginTop:10,    
},
})

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    CartAction: bindActionCreators(CartAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);