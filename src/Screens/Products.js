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
    ScrollView,TextInput,
    AsyncStorage
    
} from "react-native";
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Icon, Button, Container, Header, Content,Left ,Right,Item,Input,Card,CardItem} from 'native-base'
import { Ionicons,FontAwesome } from '@expo/vector-icons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import * as CartAction from '../actions/CartActions';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };
    }

    decreaseQuantity = () => {
        if(this.state.quantity <= 1) {
            return;
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }

    increaseQuantitiy = () => {
        this.setState({
            quantity: this.state.quantity - 1 + 2
        });
    }
    addToCart(product) {
        this.props.CartAction.addToCart(product, this.state.quantity);
    }
    render() {
        const product = this.props.navigation.state.params.product;
        return (
           <Container>
            <ScrollView>
            <Image style={styles.image} source={{ uri: product.images[0].src }} />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            
            <Text style={{fontSize:18,fontWeight:'bold'}}>{product.name}</Text>
            <Text> ₹ {product.price}</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', padding: 10, marginLeft: 20, marginBottom: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',marginTop:10 }}>
                        <TouchableOpacity style={styles.decreaseButton} onPress={this.decreaseQuantity}>
                            <Text> - </Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            onChangeText={(quantity) => this.setState({ quantity })}
                            value={`${this.state.quantity}`}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.inceaseButton} onPress={this.increaseQuantitiy} >
                            <Text> + </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => this.addToCart(product)} >
                        <Text style={{ color: '#fff' }}> ADD TO CART </Text>
                    </TouchableOpacity>
                </View>
                <HTMLView style={styles.html} value={product.description} />

            </ScrollView>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        width: 360,
        height: 360,
        marginTop:10
    },
    text: {
        fontSize: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: 50,
        borderWidth: 1,
        borderColor: 'rgba(27,31,35,0.05)',
        padding: 10,
        backgroundColor: 'rgba(27,31,35,0.05)',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#05a5d1',
        padding: 10,
        width: 150,
        height: 40,
        marginLeft: 20,
        marginTop:10,
        borderBottomLeftRadius: 17,
        borderBottomRightRadius: 17,
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,      
    },
    decreaseButton: {
        height: 40,
        width: 30,
        padding: 10,
        backgroundColor: 'rgba(27,31,35,0.05)',
        borderBottomLeftRadius: 17,
        borderTopLeftRadius: 17,
    },
    inceaseButton: {
        height: 40,
        width: 30,
        padding: 8,
        backgroundColor: 'rgba(27,31,35,0.05)',
        borderBottomRightRadius: 17,
        borderTopRightRadius: 17,
    },
    description: {
        fontSize: 14,
        padding: 15,
    },
    html: {
        paddingLeft: 20,
        paddingRight: 20
    }
});
function mapDispatchToProps(dispatch) {
	return {
		CartAction: bindActionCreators(CartAction, dispatch)
	};
}

export default connect(null, mapDispatchToProps)(Products);