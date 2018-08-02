import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
	Image,
	TouchableHighlight, ToolbarAndroid,
	FlatList,
	ScrollView
    
} from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from "react-navigation";
import {Icon, Button, Container, Header, Content,Left ,Right,Item,Input,Card,CardItem} from 'native-base'
import { Ionicons,FontAwesome } from '@expo/vector-icons'

import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
//import * as ProductAction from '../actions/ProductActions';

//https://dreamdesign.rkhomeappliances.co.in/wp-json/wc/v2/orders?&consumer_key=ck_fab24b83126c02ccdf3ffa5e39b45e92ea984d74&consumer_secret=cs_5cf3ca533a10e52f781250b06e821d909819fbb1

class HomePage extends Component {
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
		this.fetchData();
		//this.props.ProductAction.getProducts();
    }
	static navigationOptions ={
		drawerIcon:(
				<FontAwesome name="home" size={30} color="black" />
			)
	}
    render() {
        const { navigate } = this.props.navigation;

        return (
			
        	<Container>
            
			<ScrollView style={{backgroundColor:'#eeeeee'}}>
            <Content>
				<Swiper 
					autoplay={true}
					style={{height:200}}>
					<View style={{flex:1}}>
					<Image
					style={{flex:1,height:200,width:null,}}
					 source={require('../img/banner3.jpg')} />
					</View>
					<View style={{flex:1}}>
					<Image 
					style={{flex:1,height:200,width:null,}}
					source={require('../img/banner4.jpg')} />
					</View>
					<View style={{flex:1}}>
					<Image 
					style={{flex:1,height:200,width:null,}}
					source={require('../img/banner2.jpg')} />
					</View>
					</Swiper>
            </Content>
			<Card>
			<CardItem header style={{flex:1,height:50}}>
				<Text style={{paddingLeft:100}}>
					Your Recommendation
				</Text>
			</CardItem>
			</Card>
			<View>
        			<FlatList contentContainerStyle={styles.list} numColumns={2} 
            data={this.state.data || []}
            keyExtractor = {(x,i) =>i.toString()}
            renderItem = {({item})=>
                <TouchableHighlight  onPress={() => navigate("Products", { product: item })} underlayColor="transparent">
				<View style={styles.view} >
          <Image style={styles.image} source={{uri: item.images[0].src}} />
          <Text style={styles.text}>{item.name}</Text>
		  <View style={styles.borderNow}></View>
		  <View style={styles.cartPrice}>
			  <Text style={styles.addCart}>₹{item.price}</Text>
			  <Text style={styles.price}>
			  
			  </Text> 
			  </View>
        </View>
					  </TouchableHighlight> 
			} />
			</View>	
				</ScrollView>
        	</Container>
			
        )
    }
}
export default HomePage;
const styles = StyleSheet.create({
	androidHeader:{
		...Platform.select({
			android:{
				paddingTop: StatusBar.currentHeight,
			}
		})
	},
	list: {
		flexDirection: 'column',
		marginTop:20,
	  },
	  text: {
		textAlign: 'center',
		fontSize: 20,
		padding: 5,
		backgroundColor:'#fff',
		width:165,
		paddingBottom:20,

	  },
	  image: {
		flex:1,
		height:200,
		width: '100%',
		backgroundColor:'#fff',
		paddingTop:220,
	  },
	  view:{
		marginLeft:10,
		width:165
	  },
	  addCart:{
		  textAlign:'center',
		  fontSize:14,
		  fontSize:18,
		  paddingBottom:20
	  },
	  price:{
		position:'absolute',
		right:5,
		bottom:0,
		paddingBottom:20,
		fontSize:18
	  },
	  cartPrice:{
		backgroundColor:'#fff',
		marginBottom:30,
		width:165,
		paddingTop:10
	  },
	  borderNow:{
		  borderBottomWidth:1,
		  position:'absolute',
		  top:260,
		  left:15,
		  width:137,

	  }
})
