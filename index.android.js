/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 here's a merge conflict
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Hud from './application/components/hud/hud';
import moment from 'moment';

class lifeHud extends Component {
  constructor(props){
    super(props);
    this.state = new Date();

    setInterval(() => {
      this.setState(new Date());
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{
          flex: 2,
          backgroundColor: 'black',
          flexDirection:'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.headline}>LIFEHUD</Text>
          <Text style={styles.time}>
          {moment(new Date()).format('h:mm:ss a [\n] dddd')}
          </Text>
        </View>
        <View style={{flex: 7, backgroundColor: '#424242'}}>
          <Hud />
        </View>
        <View style={{flex: 1, backgroundColor: 'black'}}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  time:{
    fontSize: 25,
    color:'white',
    textAlign: 'right',
    marginTop: 25,
    marginRight:20,
    fontWeight: 'bold',

  },
  headline: {
    color: '#e0e0e0',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20
  },
});

AppRegistry.registerComponent('lifeHud', () => lifeHud);
