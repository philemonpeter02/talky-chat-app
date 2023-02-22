import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar, TouchableRipple} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import {WIDTH} from '../contants/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Header = ({onPress, title, type, image, navigation}) => {
  return (
    <View
      style={{
        height: 100,
        // backgroundColor: 'purple',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableRipple onPress={onPress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              backgroundColor: '#E5F1FF',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-left" size={14} color={Colors.primary} />
          </View>
          <Text style={styles.text}>Back</Text>
        </View>
      </TouchableRipple>
      <Text style={styles.title}>{title}</Text>
      <TouchableRipple disabled={true}>
        {image ? (
          <TouchableRipple
            onPress={() =>
              navigation.navigate('OthersProfile', {
                title: title,
                image:
                  'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
              })
            }
            style={{
              width: 50,
            }}>
            <Avatar.Image
              size={50}
              style={{backgroundColor: '#F0F0F0'}}
              source={
                image ? {uri: image} : require('../assets/images/avatar.png')
              }
            />
          </TouchableRipple>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                height: 30,
                width: 30,
              }}
            />
            <Text
              style={[
                styles.text,
                {color: type === 'edit' ? Colors.primary : 'transparent'},
              ]}>
              Done
            </Text>
          </View>
        )}
      </TouchableRipple>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: Colors.primary,
    fontFamily: 'Inter-Bold',
    fontSize: WIDTH < 375 ? 14 : 16,
    marginLeft: 5,
  },
  title: {
    color: Colors.tertiary,
    fontFamily: 'Inter-Bold',
    fontSize: WIDTH < 375 ? 14 : 16,
  },
});
