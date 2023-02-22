import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import Icon from 'react-native-vector-icons/EvilIcons';
const HeaderHome = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableRipple
        onPress={() => navigation.navigate('Profile', {type: 'edit'})}>
        <View
          style={{
            width: 50,
          }}>
          <Avatar.Image
            size={50}
            style={{backgroundColor: '#F0F0F0'}}
            source={require('../assets/images/avatar.png')}
          />
          <View
            style={{
              backgroundColor: '#2DCA8C',
              width: 12,
              height: 12,
              borderWidth: 2,
              borderColor: Colors.secondary,
              borderRadius: 14,
              position: 'absolute',
              right: 0,
              bottom: 2.5,
            }}
          />
        </View>
      </TouchableRipple>
      <TouchableRipple
        style={{
          width: 35,
          height: 50,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="search" size={35} color={Colors.tertiary} />
      </TouchableRipple>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({});
