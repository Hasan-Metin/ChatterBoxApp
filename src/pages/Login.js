import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';
import {resolveAuthError} from '../functions';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => Alert.alert('başarılı'))
        .catch((err) => Alert.alert('CHATTERBOX', resolveAuthError(err.code)));
    } else {
      Alert.alert('CHATTERBOX', "Type your email and password'");
    }
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
            <Button
              title="Sign In"
              onPress={() => {
                login();
              }}
            />
            <Button
              title="Sign Up"
              onPress={() => props.navigation.navigate('Sign')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Login};
