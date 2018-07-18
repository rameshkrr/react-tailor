import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {Icon, Button, Container, Header, Content,Left, Body } from 'native-base';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <Container style={styles.container}>
          <Image
          style={styles.drawerImage}
          source={require('../../logo2.png')}/>
      <Content>
      <View>
        <Text
          onPress={() => navigation.navigate('HomePage')}
          style={styles.transparentButton}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('Category')}
          style={styles.transparentButton}>
          Category
        </Text>
        <Text
          onPress={() => navigation.navigate('Cart')}
          style={styles.transparentButton}>
          Cart
        </Text>
        <Text
          onPress={() => navigation.navigate('Checkout')}
          style={styles.transparentButton}>
          Checkout
        </Text>
        <Text
          onPress={() => navigation.navigate('Success')}
          style={styles.transparentButton}>
          Success
        </Text>
        
      </View>
      </Content>
    </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  transparentButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C3E54',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#4C3E54',
    borderWidth: 1,
    textAlign: 'center'
  },
  drawerImage:{
    height:170,
    width:320,
    marginLeft:-40,
    marginTop:-55,
    alignItems:'center',
  }
})
