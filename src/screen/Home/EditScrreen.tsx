import React, { useState} from 'react';
import {View, StyleSheet,ScrollView} from 'react-native';
import { ButtonData, TextInputData } from '../../components';
import { hp } from '../../utils/constant';

const Home = () => {
  const [text, setText] = useState({
    name: '',
    gold: '',
    silver: '',
    amount: '',
    phoneNumber: '',
  });

  const handleInputChange = (inputName:any, value:any) => {
    setText(prevData => ({
      ...prevData,
      [inputName]: value,
    }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInputData
          placeholder="Enter Your Name"
          value={text.name}
          onChangeText={(text:string) => {
            handleInputChange('name', text);
          }}
        />
        <TextInputData
          placeholder="Enter Gold"
          keyboardType="number-pad"
          value={text.gold}
          onChangeText={(text:string) => {
            handleInputChange('gold', text);
          }}
        />
        <TextInputData
          placeholder="Enter Silver"
          keyboardType="number-pad"
          value={text.silver}
          onChangeText={(text:string) => {
            handleInputChange('silver', text);
          }}
        />
        <TextInputData
          placeholder="Enter Amount"
          keyboardType="number-pad"
          value={text.silver}
          onChangeText={(text:string) => {
            handleInputChange('amount', text);
          }}
        />
        <TextInputData
          placeholder="Enter Phone Number"
          keyboardType="phone-pad"
          value={text.phoneNumber}
          onChangeText={(text:string) => {
            handleInputChange('phoneNumber', text);
          }}
        />
        <ButtonData
          buttonText="submit"
          onPress={() => {
            console.log('submitted value: ', text);
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp(8),
  },
});

export default Home;
