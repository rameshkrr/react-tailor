import React, { Component } from "react";
import KeyboardSpacer from 'react-native-keyboard-spacer';
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
    TextInput,
    KeyboardAvoidingView,Animated,Keyboard
    
} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from "react-navigation";
import {Icon, Button, Container, Header, Content,Left ,Right,Item,Input,Card,CardItem} from 'native-base'
import { Ionicons,FontAwesome,Entypo } from '@expo/vector-icons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import * as CartAction from '../actions/CartActions';

//import * as ProductAction from '../actions/ProductActions';



class Checkout extends Component {
    constructor(props) {
    super(props);
    this.state = {
    firstName: '',
    lastName: '',
    address_1: '',
    address_2: '',
    city: 'Salem',
    state:'Tamilnadu',
    postcode:'',
    country:'India',
    email:'',
    phone:'',
    }

    }
    
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

		this.props.CartAction.getCart();
	}
    _keyExtractor = (item, index) => item.id.toString();


    removeItem(item) {
		this.props.CartAction.removeFromCart(item);
	  }
    render() {
    const { cart } = this.props;
    console.log('render cart', cart);
    const {navigate} = this.props.navigation;
    if (cart && cart.length == 0) {
    const Items = <FlatList
        data={cart}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <View>
            <Text style={{color:"#eee"}}>{pro_id = item.id}</Text>
          </View>
        }
      />;
      const Items2 =  <View>
          {Items}
        <TextInput style={{position: 'absolute',height:45, left: 0,top:20,width:'48%',backgroundColor:'#fff'}}
  placeholder="First Name"
  value={this.state.firstName}
  onChangeText={firstName => this.setState({firstName})}
  returnKeyType="next"
  underlineColorAndroid='rgba(0,0,0,0)'
  selectionColor={'black'}
  numberOfLines={1}/>
  
  <TextInput style={{position: 'absolute',height:45, right: 0,top:20,width:'48%',backgroundColor:'#fff'}}
  placeholder="Last Name"
  value={this.state.lastName}
  onChangeText={lastName => this.setState({lastName})}
  returnKeyType="next"
  underlineColorAndroid='rgba(0,0,0,0)'
  selectionColor={'black'}
  numberOfLines={1}/>

<TextInput style={{position: 'absolute', height:45,left: 0,top:70,width:'100%',backgroundColor:'#fff'}}
      placeholder="Address 1"
      value={this.state.address_1}
      onChangeText={address_1 => this.setState({address_1})}
      returnKeyType="next"
      underlineColorAndroid='rgba(0,0,0,0)'
      selectionColor={'black'}
      numberOfLines={1}/>
  
      <TextInput style={{position: 'absolute', height:45,left: 0,top:120,width:'48%',backgroundColor:'#fff'}}
      placeholder="postcode"
      value={this.state.postcode}
      onChangeText={postcode => this.setState({postcode})}
      returnKeyType="next"
      underlineColorAndroid='rgba(0,0,0,0)'
      selectionColor={'black'}
      numberOfLines={1}/>
  
  
  <TextInput style={{position: 'absolute', height:45,right: 0,top:170,width:'100%',backgroundColor:'#fff'}}
      placeholder="email"
      value={this.state.email}
      onChangeText={email => this.setState({email})}
      returnKeyType="next"
      underlineColorAndroid='rgba(0,0,0,0)'
      selectionColor={'black'}
      numberOfLines={1}/>
  
       <TextInput style={{position: 'absolute', height:45,right: 0,top:120,width:'48%',backgroundColor:'#fff'}}
      placeholder="phone"
      value={this.state.phone}
      onChangeText={phone => this.setState({phone})}
      returnKeyType="next"
      underlineColorAndroid='rgba(0,0,0,0)'
      selectionColor={'black'}
      numberOfLines={1}/>  
        
        
             <KeyboardSpacer/>
             
                  </View>
     return (
        <View style={[{flex: 1}]}>
		  {Items2}
		  <TouchableOpacity
  style={{backgroundColor: "#000", height: 50,width:'100%',position:'absolute',bottom:0}}
  onPress={this.postOrder}>
  <Text style={{color: "#fff",textAlign:'center',paddingTop:15}}> Place Order </Text>
  </TouchableOpacity> 
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
         <Text>Add Products to Checkout</Text>
        </View>
      )
    }
}
    postOrder = () => {
        url = "https://dreamdesign.rkhomeappliances.co.in/wp-json/wc/v2/orders?&consumer_key=ck_fab24b83126c02ccdf3ffa5e39b45e92ea984d74&consumer_secret=cs_5cf3ca533a10e52f781250b06e821d909819fbb1";
        
        let data = {
            payment_method: '',
            payment_method_title: 'Cash on delivery',
            billing: {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            address_1: this.state.address_1,
                address_2: this.state.address_2,
                city: this.state.city,
                state: this.state.state,
                postcode: this.state.postcode,
                country: this.state.country,
                email: this.state.email,
                phone: this.state.phone
                },
                shipping: {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    address_1: this.state.address_1,
                    address_2: this.state.address_2,
                    city: this.state.city,
                    state: this.state.state,
                    postcode: this.state.postcode,
                    country: this.state.country,
                  },
              "line_items": [
                {
                  "product_id": 229,
                  "quantity": 1
                }
              ],
              "shipping_lines": [
                {
                  "method_id": "free_shipping",
                  "method_title": "Free shipping",
                  "total": "0.00"
                }
              ]
        }
        
        console.log('Data:' + JSON.stringify(data))
        fetch(url, {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        });
        };
        
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            padding: 20,
          },
        textInputStyle:{
            left: 0, 
            height: 45,
            width:'50%'
        },
        textInputStyle2:{
            right: 0, 
            height: 45,
            width:'50%'
        },
 
          button: {
            alignItems: 'center',
            backgroundColor: '#4C3E54',
            paddingTop:20,
            width: '100%',
            height: 50,
            marginTop:10,    
        },
      });

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
      
    export default connect(mapStateToProps, mapDispatchToProps)(Checkout);