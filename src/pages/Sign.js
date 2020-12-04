import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';

const Sign = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function sign() {
    Alert.alert(email + ' ' + password);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
              source={require('../assets/logo.png')}
              style={authStyle.logo}
            />
            <Text style={authStyle.logoText}>CHATTERBOX</Text>
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Type your email...',
                keyboardType: 'email-address',
              }}
              onType={(value) => {
                setEmail(value);
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password...',
                secureTextEntry: true,
              }}
              onType={(value) => {
                setPassword(value);
              }}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password again...',
                secureTextEntry: true,
              }}
            />
            <Button
              title="Create account"
              onPress={() => {
                sign();
              }}
            />
            <Button
              title="Cancel"
              noBorder
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};
