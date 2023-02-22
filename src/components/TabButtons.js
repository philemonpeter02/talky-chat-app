import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableRipple} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import {WIDTH} from '../contants/Dimensions';
import {Fonts} from '../contants/Fonts';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';
const TabButtons = ({
  activeTab,
  setActiveTab,
  size,
  goToNextSlide,
  goToPrevSlide,
}) => {
  const progress = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: progress.value}],
    };
  }, []);
  useEffect(() => {
    if (activeTab === 1) {
      progress.value = withSpring(0);
    }
    if (activeTab === 2) {
      progress.value = withSpring(WIDTH / 2);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
  return (
    <View style={{height: 50, marginTop: size === 0 ? 0 : 25}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableRipple
          style={styles.btn}
          onPress={() => {
            setActiveTab(1);
            goToPrevSlide();
          }}>
          <Text
            style={[
              styles.btnText,
              {color: activeTab === 1 ? Colors.primary : '#AAB0B7'},
            ]}>
            Chat
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={styles.btn}
          onPress={() => {
            setActiveTab(2);
            goToNextSlide();
          }}>
          <Text
            style={[
              styles.btnText,
              {color: activeTab === 2 ? Colors.primary : '#AAB0B7'},
            ]}>
            Files
          </Text>
        </TouchableRipple>
      </View>
      <View style={{height: 1, backgroundColor: '#F0F0F0'}}>
        <Animated.View
          style={[
            {
              height: 1,
              backgroundColor: Colors.primary,
              width: WIDTH / 4,
              marginHorizontal: WIDTH / 8,
            },
            reanimatedStyle,
          ]}
        />
      </View>
    </View>
  );
};

export default TabButtons;

const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  btnText: {
    fontSize: WIDTH < 375 ? 14 : 16,
    fontFamily: Fonts.bold,
  },
});
