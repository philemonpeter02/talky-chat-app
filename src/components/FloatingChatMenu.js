import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';
import {Colors} from '../contants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const FloatingChatMenu = ({menuPressed}) => {
  // ReAnimated Initials Values
  const progress = useSharedValue(0);
  const progressTransform = useSharedValue(150);
  const progressRotate = useSharedValue(45);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{translateY: progressTransform.value}],
    };
  }, []);
  const reanimatedRotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${progressRotate.value}deg`}],
    };
  }, []);
  useEffect(() => {
    if (menuPressed === true) {
      progress.value = withSpring(1);
      progressTransform.value = withSpring(0);
      progressRotate.value = withSpring(0);
    } else {
      progress.value = withSpring(0);
      progressTransform.value = withSpring(150);
      progressRotate.value = withSpring(45);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuPressed]);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={reanimatedRotateStyle}>
        <Icon name="x" size={30} color={Colors.secondary} />
      </Animated.View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            right: 0,
            left: 0,
            top: -250,
          },
          reanimatedStyle,
        ]}>
        <View
          style={[
            styles.menu,
            {shadowColor: menuPressed ? '#000' : 'transparent'},
          ]}>
          <Icon name="paperclip" size={25} color={Colors.primary} />
        </View>
        <View
          style={[
            styles.menu,
            {shadowColor: menuPressed ? '#000' : 'transparent'},
          ]}>
          <Icon name="camera" size={25} color={Colors.primary} />
        </View>
        <View
          style={[
            styles.menu,
            {shadowColor: menuPressed ? '#000' : 'transparent'},
          ]}>
          <Icon2 name="microphone" size={25} color={Colors.primary} />
        </View>
      </Animated.View>
    </View>
  );
};

export default FloatingChatMenu;

const styles = StyleSheet.create({
  menu: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginVertical: 8,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
