import React, { Component } from "react";
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  TextInput
} from 'react-native';

class Success extends Component {
  render() {
    return (
      <View style={[{flex: 1}]}>
        {/* Some random image to show scaling */}
        <Image source={{uri: 'http://img11.deviantart.net/072b/i/2011/206/7/0/the_ocean_cherry_tree_by_tomcadogan-d41nzsz.png', static: true}}
                 style={{flex: 1}}/>

        {/* The text input to put on top of the keyboard */}
        <TextInput style={{left: 0, right: 0, height: 45}}
              placeholder={'Enter your text!'}/>

        {/* The view that will animate to match the keyboards height */}
        <KeyboardSpacer/>
      </View>
    );
  }
}
export default Success;