import React from 'react';
import {View, Text, Image} from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function Details({route}) {
  const {title, rating, company} = route.params;

  return (
    <View style={globalStyles.screenContainer}>
      <Card>
        <Text>Game: {title}</Text>
        <Text>Company: {company}</Text>
        <View style={globalStyles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}
