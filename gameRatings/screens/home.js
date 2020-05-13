import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title: 'God of War',
      company: 'Sony Entertainment',
      rating: 5,
      key: '1',
    },
    {
      title: 'Life is Strange',
      company: 'Sony Entertainment',
      rating: 4,
      key: '2',
    },
    {
      title: 'Paladins',
      company: 'Sony Entertainment',
      rating: 4,
      key: '3',
    },

    {
      title: 'Uncharted 3',
      company: 'Sony Entertainment',
      rating: 4,
      key: '4',
    },

    {
      title: 'Uncharted 2',
      company: 'Sony Entertainment',
      rating: 3,
      key: '5',
    },
    {
      title: 'Uncharted',
      company: 'Sony Entertainment',
      rating: 2,
      key: '6',
    },
    {
      title: 'Journey',
      company: 'Sony Entertainment',
      rating: 3,
      key: '7',
    },

    {
      title: 'NeedForSpeed Payback',
      company: 'EA',
      rating: 2,
      key: '8',
    },
    {
      title: 'Dishonored 2',
      company: 'Bethesda',
      rating: 3,
      key: '9',
    },
    {
      title: 'Red Dead Redemption 2',
      company: 'Rockstar Games',
      rating: 5,
      key: '10',
    },
  ]); //whole data

  return (
    <View style={globalStyles.screenContainer}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', item);
            }}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
