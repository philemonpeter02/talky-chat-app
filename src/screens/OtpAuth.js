import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoDark} from '../assets/svgs/LogoSvgs';
import {HEIGHT, WIDTH} from '../contants/Dimensions';
import {Colors} from '../contants/Colors';
import ButtonInput from '../components/ButtonInput';
import InputField from '../components/InputField';
import {Fonts} from '../contants/Fonts';
import Header from '../components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';
const OtpAuth = ({navigation, route}) => {
  const {type} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 25}}>
        <View style={[styles.innerContainer, {height: HEIGHT / 2}]}>
          <LogoDark width={WIDTH / 3} />
          <Text
            onPress={() => console.log('HI')}
            // numberOfLines={1}
            style={[
              styles.textTertiary,
              {
                marginVertical: 40,
                fontFamily: Fonts.semiBold,
                fontSize: WIDTH < 375 ? 16 : 18,
              },
            ]}>
            Enter the 4 digit codes we send to you
          </Text>
          <OTPInputView
            style={{width: '100%', height: 60, marginBottom: 50}}
            pinCount={4}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <View
          style={[
            styles.innerContainer,
            {
              height: HEIGHT / 3,
              justifyContent: 'center',
            },
          ]}>
          <ButtonInput
            onPress={() =>
              navigation.navigate('Profile', {
                type: 'create',
              })
            }
            text={`Sign ${type === 'signin' ? 'in' : 'up'}`}
            alternate={true}
          />
          <Text
            onPress={() => console.log('HI')}
            style={[
              styles.textTertiary,
              {
                marginTop: 25,
                fontFamily: Fonts.medium,
              },
            ]}>
            {type === 'signin' ? 'Don’t' : 'Already'} have an account?
          </Text>
          <Text
            onPress={() => navigation.replace('Signup')}
            style={{
              color: Colors.primary,
              marginTop: 5,
              fontFamily: Fonts.bold,
              fontSize: WIDTH < 375 ? 13 : 14,
            }}>
            Sign {type === 'signin' ? 'up' : 'in'} here
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OtpAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  innerContainer: {
    alignItems: 'center',
  },
  textTertiary: {
    color: Colors.tertiary,
    fontSize: WIDTH < 375 ? 13 : 14,
  },
  //otp styles

  underlineStyleBase: {
    width: WIDTH <= 375 ? 50 : 60,
    height: WIDTH <= 375 ? 50 : 60,
    borderWidth: 1,
    borderColor: '#AAB0B7',
    borderRadius: 8,
    color: Colors.tertiary,
    fontSize: WIDTH < 375 ? 20 : 24,
    fontFamily: Fonts.semiBold,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
});
