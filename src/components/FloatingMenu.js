import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import FloatingMenuIcon from '../assets/svgs/FloatingMenu';

const FloatingMenu = ({onPress}) => {
  return (
    <TouchableRipple style={styles.container} onPress={onPress}>
      <FloatingMenuIcon />
    </TouchableRipple>
  );
};

export default FloatingMenu;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    position: 'absolute',
    bottom: 50,
    right: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
