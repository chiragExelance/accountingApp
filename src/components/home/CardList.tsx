import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {fontSize, hp, wp} from '../../utils/constant';
import {colors} from '../../utils/theme';
import {icons} from '../../assets';

export type State = {
  title?: string;
  silver?: number;
  gold?: number;
  amount?: number;
  phone?: number;
  onPressDelete: () => void;
  onPressEdit: () => void;
};

const CardList = ({title, silver, gold, amount,onPressEdit,onPressDelete}: State) => {
  return (
    <View style={[styles.userDataBody, styles.shadowProp]}>
      <View style={styles.userDataView}>
        <View style={styles.userDataTitle}>
          <Text style={styles.userDataText}>{title}</Text>
          <View style={styles.userDataImgView}>
            <Image style={styles.userDataImg} source={icons.call}></Image>
          </View>
        </View>
        <View style={styles.userDataTitle2}>
          <View>
            <Text style={styles.userDataSilverText}>Silver</Text>
            <Text style={styles.userDataSilverTextTot}> -{silver} Gms</Text>
          </View>
          <View>
            <Text style={styles.userDataSilverText}>Gold</Text>
            <Text style={styles.userDataGoldTextTot}>+{gold} Gms</Text>
          </View>
          <View>
            <Text style={styles.userDataSilverText}>Amount</Text>
            <Text style={styles.userDataAmountTextTot}>+{amount}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cradStyle}>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            {
              backgroundColor: colors.greyLight,
            },
          ]}
          onPress={onPressEdit}
          >
          <Image style={styles.btnIconsStyle} source={icons.edit}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            {
              backgroundColor: colors.lightGray1,
            },
          ]}
          onPress={onPressDelete}
          >
          <Image style={styles.btnIconsStyle} source={icons.delete}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userDataBody: {
    marginHorizontal: wp(3),
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    flexDirection: 'row',
    borderRadius: wp(2),
    backgroundColor: '#fff',
    marginBottom: hp(0.5),
    elevation:5
  },
  userDataView: {flex: 1},
  userDataTitle: {flexDirection: 'row', alignItems: 'center'},
  userDataTitle2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userDataText: {
    fontSize: fontSize(15),
    marginEnd: wp(1.5),
    paddingVertical: hp(0.7),
    fontWeight: 'bold',
  },
  userDataImgView: {
    backgroundColor: '#5a4cee',
    borderRadius: wp(50),
    height: wp(4.2),
    width: wp(4.2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDataImg: {height: wp(3.8), width: wp(3.8)},
  userDataSilverText: {
    fontSize: fontSize(10),
    color: '#A4A4A4',
    fontWeight: 'bold',
  },
  userDataSilverTextTot: {
    fontSize: fontSize(11),
    color: '#bb3333',
    fontWeight: 'bold',
  },
  userDataGoldTextTot: {
    fontSize: fontSize(11),
    color: '#7ac98a',
    fontWeight: 'bold',
  },
  userDataAmountTextTot: {
    fontSize: fontSize(11),
    color: '#7ac98a',
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cradStyle: {
    justifyContent: 'space-around',
    paddingStart: wp(3),
  },
  btnStyle: {
    borderRadius: wp(20),
    padding: wp(1.3),
  },
  btnIconsStyle: {
    height: wp(3.5),
    width: wp(3.5),
  },
});

export default CardList;
