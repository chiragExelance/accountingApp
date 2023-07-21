import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {fontSize, hp, wp} from '../../utils/constant';
import {colors} from '../../utils/theme';
import {icons} from '../../assets';

export type State = {
  value: string;
  onChangeText:any;
};

const SearchBar = ({value, onChangeText}: State) => {
  return (
    <View style={[styles.searchInputView, styles.shadowProp]}>
      <Image style={styles.searchImg} source={icons.search}></Image>
      <TextInput
        value={value}
        style={styles.searchInput}
        onChangeText={onChangeText}
        placeholder="Search Karigar"
        placeholderTextColor={colors.grey}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputView: {
    borderRadius: wp(1),
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems:'center'
  },
  searchInput: {fontSize: fontSize(16), fontWeight: 'bold',width:wp(70),height:hp(5)},
  searchImg: {height: wp(4), width: wp(4), marginEnd: wp(2)},
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default SearchBar;
