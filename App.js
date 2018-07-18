import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator ,NavigationActions,DrawerItems,createStackNavigator} from 'react-navigation'
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import {Icon, Button, Container, Header, Content,Left, Body } from 'native-base';
import HomePage from './src/Screens/HomePage'
import Products from './src/Screens/Products'
import Category from './src/Screens/Category'
import Checkout from './src/Screens/Checkout'
import Success from './src/Screens/Success'
import Cart from './src/Screens/Cart'
import InitialState from './src/reducers/InitialState';
import DrawerContainer from './src/Screens/DrawerContainer';
import configureStore from './src/store/configureStore';

const DrawerNavigation = createDrawerNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: "Dream Designs"
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      title: "Category"
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: "Checkout"
    }
  },
  Products: {
    screen: Products,
    navigationOptions: {
      title: "Products"
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: "Cart"
    }
  },
  Success: {
    screen: Success,
    navigationOptions: {
      title: "Success"
    }
  },
}, {
    contentComponent: DrawerContainer,
    initialRouteName:'Checkout',
    drawerOpenRoute: 'DrawerOpen',
    drawerClassRoute: 'DrawerClose',
    draweToggleRoute: 'DrawerToggle'
    
  });


const StackNavigation = createStackNavigator({
  DrawerNavigation: { screen: DrawerNavigation }
}, {
    
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      headerTintColor: 'white',
      headerLeft: drawerButton(navigation),
      headerRight: cartButton(navigation, screenProps)
    })
  });

const drawerButton = (navigation) => (
  <Text
    style={{ padding: 15, color: 'white' }}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
    }><Ionicons name="ios-menu" size={30} /></Text>
);

const cartButton = (navigation, screenProps) => (
  <Text style={{ padding: 15, color: 'white' }}
    onPress={() => { navigation.navigate('Cart') }}
  >
    <EvilIcons name="cart" size={30} />
    {screenProps.cartCount}
  </Text>
);

class CA extends React.Component {
  render() {
    const cart = {
      cartCount: this.props.cart.length
    }
    return (
      <StackNavigation screenProps={cart} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const ConnectedApp = connect(mapStateToProps, null)(CA);

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    )
  }
}

export default App;