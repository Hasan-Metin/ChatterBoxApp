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
  const [postList, setPostList] = useState([]);

  const selectingTopic = (topic) => {
    setSelectedTopic(topic);
    setTopicModalFlag(false);
    database()
      .ref(`${topic}/`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const formattedData = Object.keys(data).map((key) => ({
            ...data[key],
          }));
          formattedData.sort((a, b) => {
            return new Date(a.time) - new Date(b.time);
          });
          setPostList(formattedData);
        } else {
          setPostList([]);
        }
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

  const renderPosts = ({item}) => <PostItem post={item} />;
  console.log(user.email);

  return (
    <SafeAreaView style={timelinePage.container}>
      <KeyboardAvoidingView style={timelinePage.container}>
        <View style={timelinePage.container}>
          <Header
            title={selectedTopic}
            onLogOut={() => {
              auth().signOut();
            }}
            onTopicModalSelect={() => setTopicModalFlag(true)}
          />
          <FlatList
            data={postList}
            renderItem={renderPosts}
            bounces={false}
            keyExtractor={(_, index) => index.toString()}
            ListEmptyComponent={()=><Text>There is no previous chat!</Text>}
          />
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
