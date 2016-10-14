import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class Hud extends Component {
  static get defaultProps() {
    return {
      title: 'The Hud Will Go Here'
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}.</Text>
      </View>
    )
  }
}
