import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fontSize, hp, wp} from '../../utils/constant';
import {icons} from '../../assets';
import {CardMain, Header, ModalView, SearchBar} from '../../components';
import CardList from '../../components/home/CardList';
import {listUserData} from '../../utils/dataConstant';
import { navigate } from '../../navigators/rootNavigation';
import { useRoute } from '@react-navigation/native';

function Homescreen() {
  const route = useRoute<any>();
  const list = route && route?.params;
  const [data, setData] = useState<any>([]);
  const [Input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [silverValue, setSilverValue] = useState(0);
  const [goldValue, setGoldValue] = useState(0);
  const [amountValue, setAmountValue] = useState(0);

  useEffect(() => {
    setData(listUserData);
  }, []);

  useEffect(() => {
    list && setData(list?.newData);
  }, [list]);


  const filterFun = (e: string) => {
    if (e.length !== 0) {
      let mach = listUserData.filter((a: any) => {
        return a.title.match(e);
      });
      setData(mach);
    } else {
      setData(listUserData);
    }
  };

  useEffect(() => {
    const silver =
      data &&
      data.reduce(function (acc: any, obj: any) {
        return acc + obj.silver;
      }, 0);
    const gold =
      data &&
      data.reduce(function (acc: any, obj: any) {
        return acc + obj.gold;
      }, 0);
    const amount =
      data &&
      data.reduce(function (acc: any, obj: any) {
        return acc + obj.amount;
      }, 0);

    setSilverValue(silver);
    setGoldValue(gold);
    setAmountValue(amount);
  }, [data]);

  const onAddPartyPress =()=>{
    setModalVisible(false)
    //@ts-ignore
    navigate('EditScrreen',{newData:data})
  }

  const onPressDelete =(item:any)=>{
    const updateData=data.filter((list:any) => list.id !==item.id);
    setData(updateData)
  }

  const onPressEdit =(item:any)=>{
    //@ts-ignore
    navigate('EditScrreen',{dataList:item,newData:data})
  }

  return (
    <View style={styles.body}>
      <Header name="Mannalal Manaklal" />
      <View style={styles.databody}>
        <View style={styles.searchStyle}>
          <SearchBar
            value={Input}
            onChangeText={(t: string) => {
              filterFun(t);
              setInput(t);
            }}
          />
          <View style={styles.butBody}>
            <TouchableOpacity style={styles.bothBut}>
              <Text style={styles.bothButText}>Both</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goldBut}>
              <Text style={styles.goldButText}>Gold</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goldBut}>
              <Text style={styles.goldButText}>Silver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exportBut}>
              <Image style={styles.exportButImg} source={icons.fire}></Image>
              <Text style={styles.exportButText}>Export</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CardMain silver={silverValue} gold={goldValue} amount={amountValue} />
        {data.length > 0 && (
          <View style={[styles.userDatalistBody, styles.shadowProp]}>
            <FlatList
              data={data}
              contentContainerStyle={{marginBottom: hp(2)}}
              keyExtractor={(item: any) => item.id}
              indicatorStyle={'black'}
              scrollEventThrottle={10}
              renderItem={({item}: any) => {
                return (
                  <CardList
                    title={item?.title}
                    silver={item?.silver}
                    gold={item?.gold}
                    amount={item?.amount}
                    onPressDelete={()=>onPressDelete(item)}
                    onPressEdit={()=>onPressEdit(item)}
                  />
                );
              }}
            />
          </View>
        )}
      </View>
      {modalVisible === false && (
        <View style={styles.addButBody}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.addBut}>
            <Text style={styles.addButText}>
              {modalVisible === false ? '+' : '-'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <ModalView
        modalVisible={modalVisible}
        onPress={() => setModalVisible(false)}
        onAddParty={onAddPartyPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1, paddingHorizontal: wp(3), paddingBottom: hp(2)},
  databody: {flex: 1},
  searchStyle: {
    paddingHorizontal: wp(2),
    paddingTop: hp(1.5),
    marginHorizontal: wp(3),
    marginBottom: hp(2),
  },
  butBody: {flexDirection: 'row', marginTop: hp(2)},
  bothBut: {
    justifyContent: 'center',
    marginRight: wp(1),
    backgroundColor: '#A4A4A4',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.3),
    borderRadius: wp(10),
  },
  bothButText: {color: '#fff', fontWeight: 'bold', fontSize: fontSize(13)},
  goldBut: {
    justifyContent: 'center',
    marginRight: wp(1),
    borderColor: '#A4A4A4',
    borderWidth: 1,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.3),
    borderRadius: wp(10),
  },
  goldButText: {color: '#A4A4A4', fontWeight: 'bold', fontSize: fontSize(13)},
  exportBut: {
    marginStart: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#A4A4A4',
    borderWidth: 1,
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.3),
    borderRadius: wp(10),
  },
  exportButText: {
    color: '#A4A4A4',
    fontWeight: 'bold',
    marginStart: wp(0.5),
    fontSize: fontSize(13),
  },
  exportButImg: {height: wp(4), width: wp(4)},
  userDatalistBody: {
    marginHorizontal: wp(3),
    backgroundColor: '#fff',
    borderRadius: wp(3),
    flex: 1,
    elevation: 5,
    // paddingVertical:hp(2)
    // paddingHorizontal:wp(3)
    paddingRight: wp(0.8),
  },

  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  addButBody: {paddingHorizontal: wp(10)},
  addBut: {
    height: wp(12),
    width: wp(12),
    backgroundColor: '#14396e',
    position: 'absolute',
    end: wp(6),
    bottom: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(30),
  },
  addButText: {fontSize: fontSize(30), color: '#fff'},
  removeButBody: {
    position: 'absolute',
    end: wp(7),
    bottom: hp(6),
    paddingHorizontal: wp(2),
  },
  removeBut: {
    height: wp(12),
    width: wp(12),
    backgroundColor: '#14396e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(30),
  },
});

export default Homescreen;
