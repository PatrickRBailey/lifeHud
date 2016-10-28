import React, { Component } from 'react';
import { View, Text, Navigator, TextInput } from 'react-native';

export default class Hud extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
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
        <View style={{flex: 7}}><Text style={{padding: 10, fontSize:30, color:'white'}}>
          {this.state.text}
        </Text>
        

        </View>
        <View style={{flex: 2}}><TextInput
          style={{height: 40, color:'white', fontSize:20}}
          placeholder="Add a task"
          placeholderTextColor="gray"
          onChangeText={(text) => this.setState({text})}
        /></View>
      </View>
    )
  }
}
