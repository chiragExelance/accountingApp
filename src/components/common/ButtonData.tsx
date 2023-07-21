import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSize, hp, wp} from '../../utils/constant';
import {colors} from '../../utils/theme';

export type State = {
  buttonText: string;
  onPress: any;
};

const ButtonData = ({buttonText, onPress}: State) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'pink',
    borderWidth: 1,
    borderRadius: 50,
    width: wp(50),
    marginVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(5),
  },
  textStyle: {
    fontSize: fontSize(18),
    color: colors.black,
  },
});

export default ButtonData;
