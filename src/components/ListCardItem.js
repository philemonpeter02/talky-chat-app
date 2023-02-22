import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import {Fonts} from '../contants/Fonts';

const ListCardItem = ({item, navigation}) => {
  return (
    <TouchableRipple
      onPress={() => navigation.navigate('Chat')}
      style={{
        paddingHorizontal: 25,
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F7F7F9',
      }}>
      <>
        <Avatar.Image
          size={50}
          style={{backgroundColor: '#F0F0F0'}}
          source={item.profilePicture}
        />
        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
          <Text
            numberOfLines={1}
            style={[
              styles.centerText,
              {
                fontFamily: Fonts.semiBold,
                fontSize: 16,
                color: Colors.tertiary,
              },
            ]}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.centerText}>
            {item.lastMsg}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 'auto',
            flexDirection: 'row',
          }}>
          <Text style={styles.lastActive}>{item.lastActive}</Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="chevron-right" size={25} color={Colors.tertiary} />
          </View>
        </View>
      </>
    </TouchableRipple>
  );
};

export default ListCardItem;

const styles = StyleSheet.create({
  lastActive: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: '#58616A',
    textAlign: 'right',
    marginRight: 10,
  },
  centerText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#58616A',
    textAlign: 'left',
    marginLeft: 10,
  },
});
