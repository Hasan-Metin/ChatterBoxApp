import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import moment from 'moment';

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const user = auth().currentUser;

const Timeline = () => {
  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [data, setData] = useState([]);

  const selectingTopic = (topic) => {
    setSelectedTopic(topic);
    setTopicModalFlag(false);
    database()
      .ref()
      .on('value', (snapshot) => {
        console.log(snapshot.val());
      });
  };

  const sendingPost = (value) => {
    const postObject = {
      userMail: user.email,
      postText: value,
      postTime: moment().toISOString(),
    };
    database().ref(`${selectedTopic}/`).push(postObject);
  };

  return (
    <SafeAreaView style={timelinePage.container}>
      <KeyboardAvoidingView style={timelinePage.container}>
        <View style={timelinePage.container}>
          <Header
            title={selectedTopic}
            onLogOut={() => null}
            onTopicModalSelect={() => setTopicModalFlag(true)}
          />
          <FlatList data={[]} renderItem={() => null} bounces={false} />
          <PostInput onSendPost={sendingPost} />
          <TopicSelectModal
            visibility={topicModalFlag}
            onClose={() => {
              selectedTopic ? setTopicModalFlag(false) : null;
            }}
            onTopicSelect={selectingTopic}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Timeline};
