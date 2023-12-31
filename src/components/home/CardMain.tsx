import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fontSize, hp, wp} from '../../utils/constant';
import {colors} from '../../utils/theme';

export type State = {
  silver: number;
  gold: number;
  amount: number;
};

const CardMain = ({silver, gold, amount}: State) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.total}>Totals</Text>
        <View style={styles.cardStyle}>
          <View>
            <Text style={styles.textStyle}>Silver</Text>
            <Text style={[styles.valueStyle, {color: colors.red}]}>
              -{silver}{' Gms'}
            </Text>
          </View>
          <View>
            <Text style={styles.textStyle}>Gold</Text>
            <Text style={[styles.valueStyle, {color: colors.green}]}>
              +{gold}{' Gms'}
            </Text>
          </View>
          <View>
            <Text style={styles.textStyle}>Amount</Text>
            <Text style={[styles.valueStyle, {color: colors.greenlight}]}>
              +{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(amount)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp(3),
    marginBottom: hp(2),
    paddingVertical: hp(1),
    marginHorizontal: wp(4.2),
    paddingHorizontal: wp(4),
    borderWidth: 5,
    borderColor: colors.whiteGray,
  },
  total: {
    fontSize: fontSize(16),
    fontWeight:'700'
  },
  textStyle: {
    fontSize: fontSize(12),
  },
  valueStyle: {
    fontSize: fontSize(13),
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(0.5),
    marginLeft:2
  },
});

export default CardMain;
