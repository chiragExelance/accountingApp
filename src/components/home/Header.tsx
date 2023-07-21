import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {fontSize, hp, wp} from '../../utils/constant';
import {colors} from '../../utils/theme';
import {icons} from '../../assets';

export type State = {
  name: string;
};

const Header = ({name}: State) => {
  return (
    <View style={styles.nev}>
      <View style={styles.profileImgView}>
        <Image style={styles.profileImg} source={icons.search}></Image>
      </View>
      <Text style={styles.nevText}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  nev: {paddingTop: hp(2), flexDirection: 'row', alignItems: 'center'},
  profileImgView: {
    borderColor: colors.blacklight,
    borderWidth: 3,
    borderRadius: wp(50),
    height: wp(9),
    width: wp(9),
    marginRight: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImg: {borderRadius: wp(50), height: wp(5), width: wp(5)},
  nevText: {
    fontSize: fontSize(20),
    fontWeight: 'bold',
    color: colors.blacklight,
  },
});

export default Header;
