import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import {ButtonData, Header, TextInputData} from '../../components';
import {hp, wp} from '../../utils/constant';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import { navigate } from '../../navigators/rootNavigation';

const EditScrreen = () => {
  const route = useRoute<any>();
  const list = route && route?.params;
  const dataList = route && route?.params && list?.dataList;
  const [name, setName] = useState('');
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      if (dataList) {
        setName(dataList?.title);
        setGold(dataList?.gold?.toString());
        setSilver(dataList?.silver?.toString());
        setAmount(dataList?.amount?.toString());
        setPhoneNumber(dataList?.phone?.toString());
      }
    }, [dataList]),
  );
  const onPressEdit = () => {
    if (name.length == 0) {
      //@ts-ignore
      alert('Please add field name ');
    } else if (gold.length == 0) {
      //@ts-ignore
      alert('Please add field gold value');
    } else if (silver.length == 0) {
      //@ts-ignore
      alert('Please add field silver  value');
    } else if (amount.length == 0) {
      //@ts-ignore
      alert('Please add field amount value');
    } else {
      const updateData = list?.newData?.map((list: any) => {
        if (dataList?.id == list.id) {
          return {
            ...list,
            title: name,
            silver: Number(silver),
            gold: Number(gold),
            amount: Number(amount),
            phone: phoneNumber,
          };
        } else {
          return list;
        }
      });
      //@ts-ignore
      navigate('Home', {newData: updateData});
    }
  };
  const onPressSave = () => {
    if (
      name == '' ||
      gold == '' ||
      silver == '' ||
      amount == '' ||
      phoneNumber == ''
    ) {
      //@ts-ignore
      alert('Please add field value');
    } else {
      const data = {
        id: Math.floor(Math.random() * 9999999999),
        title: name,
        silver: Number(silver),
        gold: Number(gold),
        amount: Number(amount),
        phone: phoneNumber,
      };
      //@ts-ignore
      console.log('list?.newDatalist?.newData',list?.newData);
      
      // navigate('Home', {newData: [...list?.newData, data]});
    }
  };

  return (
    <View>
      <View style={{marginHorizontal: wp(2)}}>
        <Header name="Mannalal Manaklal" />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <TextInputData
            placeholder="Enter Your Name"
            value={name}
            onChangeText={(text: string) => {
              setName(text);
            }}
          />
          <TextInputData
            placeholder="Enter Gold"
            // keyboardType="number-pad"
            value={gold}
            onChangeText={(text: any) => {
              setGold(text);
            }}
          />
          <TextInputData
            placeholder="Enter Silver"
            // keyboardType="number-pad"
            value={silver}
            onChangeText={(text: any) => {
              setSilver(text);
            }}
          />
          <TextInputData
            placeholder="Enter Amount"
            // keyboardType="number-pad"
            value={amount}
            onChangeText={(text: any) => {
              setAmount(text);
            }}
          />
          <TextInputData
            placeholder="Enter Phone Number"
            // keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text: any) => {
              setPhoneNumber(text);
            }}
          />
          <ButtonData
            buttonText={dataList ? 'Edit' : 'Save'}
            onPress={dataList ? onPressEdit : onPressSave}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp(3),
  },
});

export default EditScrreen;
