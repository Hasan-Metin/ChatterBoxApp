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
import auth from '@react-native-firebase/auth';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import {resolveAuthError, matchPassword, validateEmail} from '../functions';

const Sign = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPassworsMatch, setPasswordMatch] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);

  function sign() {
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
              onEndEdit={(value) => {
                validateEmail(value) ? setEmail(value) : setEmailValid(false);
              }}
              isFocused={(value) => {
                value ? setEmailValid(true) : null;
              }}
            />
            {!isEmailValid && (
              <View style={authStyle.pswCheck}>
                <Text style={authStyle.pswCheck}>
                  Not a valid email address!
                </Text>
              </View>
            )}
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
              onType={(value) => {
                setPasswordMatch(() => matchPassword(password, value));
              }}
            />
            {!isPassworsMatch && (
              <View style={authStyle.pswCheck}>
                <Text style={authStyle.pswCheck}>Not Matching Passwords</Text>
              </View>
            )}
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
