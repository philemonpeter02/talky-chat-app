import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import {WIDTH} from '../contants/Dimensions';

const ButtonInput = ({text, icon, onPress, alternate}) => {
  return (
    <TouchableRipple
      style={[
        styles.btn,
        {backgroundColor: alternate ? Colors.primary : Colors.secondary},
      ]}
      onPress={onPress}>
      <View style={styles.container}>
        {icon && (
          <View
            style={{
              width: '35%',
              alignItems: 'center',
              justifyContent: 'center',
              //   marginRight: 'auto',
              //   backgroundColor: 'red',
            }}>
            {icon}
          </View>
        )}
        <Text
          style={[
            styles.text,
            {
              width: icon && '70%',
              color: alternate ? Colors.secondary : Colors.tertiary,
            },
          ]}>
          {text}
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default ButtonInput;

const styles = StyleSheet.create({
  btn: {
    height: 60,
    width: '100%',
    borderRadius: 8,

    // Shadow Props
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.tertiary,
    fontFamily: 'Inter-Medium',
    fontSize: WIDTH < 375 ? 13 : 14,
  },
});
