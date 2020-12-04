import React from 'react';
import {View, TextInput} from 'react-native';

import {input} from './styles';

const Input = (props) => {
  return (
    <View style={input.container}>
      <TextInput
        style={input.textInput}
        {...props.inputProps}
        onChangeText={props.onType}
        onEndEditing={props.onEndEdit}
        onFocus={props.isFocused}
      />
    </View>
  );
};

export {Input};
