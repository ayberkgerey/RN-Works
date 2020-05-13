import React from 'react';
import {Image, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Header() {
  return (
    <View styles={globalStyles.header}>
      <View style={globalStyles.headerTitle}>
        <Text style={globalStyles.headerText}>My Games</Text>
        <Image
          source={require('../assets/playstation-circle-dark-icon.png')}
          style={globalStyles.headerImage}
        />
      </View>
    </View>
  );
}
