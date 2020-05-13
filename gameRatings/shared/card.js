import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {globalStyles} from '../styles/global';

export default function CardView(props) {
  return (
    <View style={globalStyles.card}>
      <View style={globalStyles.cardContent}>{props.children}</View>
    </View>
  );
}
