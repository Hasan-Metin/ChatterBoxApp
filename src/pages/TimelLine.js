import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const Timeline = () => {
  const user = auth().currentUser;
  console.log(user);

  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Text>Timeline</Text>
      </View>
    </SafeAreaView>
  );
};

export {Timeline};
