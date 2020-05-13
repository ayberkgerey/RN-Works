import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

class About extends React.Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Text>About Screen</Text>
      </View>
    );
  }
}

export default About;
