import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Animated,
  Text,
} from 'react-native';

import {TextInput, TouchableRipple} from 'react-native-paper';
// import Entypo from "@expo/vector-icons/Entypo";
// import Ionicons from "@expo/vector-icons/Ionicons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../contants/Colors';
import {WIDTH} from '../contants/Dimensions';
import {Fonts} from '../contants/Fonts';
import FloatingChatMenu from './FloatingChatMenu';
import Icon from 'react-native-vector-icons/Feather';
// import EmojiSelector, { Categories } from "react-native-emoji-selector";

const Input = ({inputMessage, onSendPress, setMessage}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [menuPressed, setMenuPressed] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // Initial value for opacity: 0
  useEffect(() => {
    if (inputMessage !== '') {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
      setDisabled(false);
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
      setDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputMessage]);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={[styles.container]}>
      {/* <Entypo name="emoji-happy" color="#fff" size={20} /> */}

      {/* <TextInput
        placeholder="Message"
        value={inputMessage}
        onChangeText={setMessage}
        style={styles.input}
        returnKeyType="send"
        onSubmitEditing={onSendPress}
      /> */}
      <TextInput
        placeholder={'Message'}
        value={inputMessage}
        mode="outlined"
        // returnKeyType="send"
        onChangeText={setMessage}
        outlineColor="rgba(170, 176, 183,0.8)"
        activeOutlineColor="rgba(55,125,255,0.8)"
        selectionColor="rgba(55,125,255,0.8)"
        textColor={Colors.tertiary}
        placeholderTextColor={'#AAB0B7'}
        theme={{roundness: 8}}
        contentStyle={{height: 60}}
        style={styles.main}
        right={
          <TextInput.Icon
            style={{
              height: 60,
              marginBottom: -5,
            }}
            onPress={onSendPress}
            icon={'send'}
          />
        }
      />
      {/* <Animated.View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        <TouchableOpacity onPress={onSendPress} disabled={disabled}>
          <Ionicons name="ios-send" color="#FFF" size={20} />
        </TouchableOpacity>
      </Animated.View> */}
      <TouchableRipple
        onPress={() => {
          console.log('pressed');
          setMenuPressed(!menuPressed);
        }}
        style={styles.menu}>
        <FloatingChatMenu menuPressed={menuPressed} />
      </TouchableRipple>
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 10,
  },

  main: {
    fontFamily: Fonts.medium,
    flex: 1,
    fontSize: WIDTH < 375 ? 13 : 14,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  menu: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 10,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
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
