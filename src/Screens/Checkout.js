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
//import * as ProductAction from '../actions/ProductActions';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: t.String,
});

class Checkout extends Component {
	
    render() {
        const { navigate } = this.props.navigation;

        return (
			
           
			<View style={styles.container}>
                
        <Form type={User} />
        <TouchableOpacity style={styles.button} onPress={() => navigate("Checkout")} >
                        <Text style={{ color: '#fff' }}> CHECKOUT </Text>
                    </TouchableOpacity>
</View>

			
        );
    }
}
export default Checkout;
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
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