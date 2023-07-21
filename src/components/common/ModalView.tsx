import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Image,
} from 'react-native';
import {fontSize, hp, wp} from '../../utils/constant';
import {colors} from '../../utils/theme';
import {icons} from '../../assets';

export type State = {
  modalVisible: boolean;
  onPress: () => void;
  onAddParty: () => void;
};

const ModalView = ({modalVisible, onPress,onAddParty}: State) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={onPress}>
      <View style={{backgroundColor: '#00000070', flex: 1}}>
        <View style={styles.addPartyBody}>
          <TouchableOpacity style={styles.addPartyBut} onPress={onAddParty}>
            <Image style={styles.addPartyImg} source={icons.adduser}></Image>
          </TouchableOpacity>
          <Text style={{marginTop: hp(0.5), color: '#5b5b5b'}}>Add Party</Text>
        </View>
        <View style={styles.removeButBody}>
          <TouchableOpacity onPress={onPress} style={styles.removeBut}>
            <Text style={styles.addButText}>
              {modalVisible === false ? '+' : '-'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addPartyBody: {
    position: 'absolute',
    end: wp(7),
    bottom: hp(13),
    paddingHorizontal: wp(2),
    height: hp(16),
    width: hp(16),
    backgroundColor: '#fff',
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPartyBut: {
    height: wp(12),
    width: wp(12),
    backgroundColor: '#cadaf1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(30),
  },
  addPartyImg: {height: wp(7), width: wp(7)},
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
  addButText: {fontSize: fontSize(30), color: '#fff'},
});

export default ModalView;
