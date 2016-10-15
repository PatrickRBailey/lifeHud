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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{
          flex: 2

        }}><Text style={{
          color:'white',
          fontSize: 35,
          fontWeight: 'bold',
          marginLeft: 20,
          marginTop: 5,
          borderBottomWidth: 2,
          borderBottomColor: '#e0e0e0',
          width: 360

        }}>Condition: 72%</Text></View>
        <View style={{flex: 7}}><Text>This is Box 2</Text></View>
        <View style={{flex: 5}}><Text>This is Box 3</Text></View>
      </View>
    )
  }
}
