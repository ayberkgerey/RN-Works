import * as React from 'react';
import {View, Text} from 'react-native';
import {Header, Icon} from '../../components';
class Home extends React.Component {
  render() {
    return (
      <View>
        <Icon name="search" tintColor="black" />
        <Header />
      </View>
    );
  }
}

export default Home;
