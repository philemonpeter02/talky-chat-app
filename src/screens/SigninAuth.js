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

const SigninAuth = ({navigation, route}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    phone: '',
  });

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
            style={[
              styles.textTertiary,
              {
                marginVertical: 40,
                fontFamily: Fonts.semiBold,
                fontSize: WIDTH < 375 ? 16 : 18,
              },
            ]}>
            {type === 'social'
              ? 'Sign in with Google'
              : 'Continue with phone number'}
          </Text>
          {type === 'social' && (
            <>
              <InputField
                placeholder="Enter your gmail address"
                text={data.email}
                setText={setData}
                formKey="email"
              />
              <View style={{marginTop: 15}} />
              <InputField
                placeholder="Enter your password"
                text={data.password}
                setText={setData}
                formKey="password"
              />
            </>
          )}
          {type === 'phone' && (
            <>
              <InputField
                placeholder="Enter your phone number"
                text={data.phone}
                setText={setData}
                formKey="phone"
              />
            </>
          )}
          {type === 'social' && (
            <Text
              onPress={() => console.log('HI')}
              style={[
                styles.textTertiary,
                {
                  marginTop: 15,
                  marginRight: 'auto',
                  marginLeft: 15,
                  fontFamily: Fonts.medium,
                  fontSize: WIDTH < 375 ? 11 : 12,
                  textDecorationLine: 'underline',
                },
              ]}>
              Forgot password?
            </Text>
          )}
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
            text="Sign in"
            alternate={true}
            onPress={() =>
              type === 'phone' &&
              navigation.navigate('OtpAuth', {
                type: 'signin',
              })
            }
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
            Don’t have an account?
          </Text>
          <Text
            onPress={() => navigation.replace('Signup')}
            style={{
              color: Colors.primary,
              marginTop: 5,
              fontFamily: Fonts.bold,
              fontSize: WIDTH < 375 ? 13 : 14,
            }}>
            Sign up here
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SigninAuth;

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
});
