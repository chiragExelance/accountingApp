import React from 'react';
import {
  View,

  StyleSheet,
  TextInput,
} from 'react-native';
import { fontSize, hp, wp } from '../../utils/constant';
import { colors } from '../../utils/theme';

export type State = {
  placeholder?: string;
  value?: any;
  keyboardType?:any
  onChangeText?:any;
};

const TextInputData = ({placeholder, value, keyboardType, onChangeText}:State) => {
  return (
    <View style={styles.textInputStyle}>
      <TextInput
        autoCorrect={false}
        style={styles.textStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderRadius: wp(2),
    borderWidth: 1,
    height: hp(6),
    width: wp(95),
    paddingStart: wp(2),
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: hp(2.5),
  },
  textStyle:{
    fontSize: fontSize(16),
    color: colors.black,
  }
});

export default TextInputData;
