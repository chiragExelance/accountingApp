import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {CardMain, Input} from '../../components';
import {hp} from '../../utils/constant';

const Homescreen = () => {
  const [firstName, setFirstName] = useState('adsa');

  return (
    <SafeAreaView>
      <FlatList
        data={[0, 1]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginBottom: hp(2)}}
        renderItem={({item}) => {
          return (
            <CardMain id={item?.id} name={item?.name} phone={item.phone} />
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Homescreen;
