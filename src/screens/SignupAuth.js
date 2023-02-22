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
import {Checkbox} from 'react-native-paper';
const SignupAuth = ({navigation, route}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    phone: '',
  });
  const [checked, setChecked] = useState(false);
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
              ? 'Sign up with Google'
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

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingTop: 15,
              alignItems: 'center',
            }}>
            <Checkbox
              color={Colors.primary}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                color: Colors.tertiary,
                fontFamily: Fonts.medium,
                fontSize: 12,
              }}>
              I agree to the{' '}
              <Text
                onPress={() => console.log('HI')}
                style={{textDecorationLine: 'underline'}}>
                terms & conditions
              </Text>
            </Text>
          </View>
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
            text="Sign up"
            alternate={true}
            onPress={() =>
              navigation.navigate('OtpAuth', {
                type: 'signup',
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
            Already have an account?
          </Text>
          <Text
            onPress={() => navigation.replace('Signup')}
            style={{
              color: Colors.primary,
              marginTop: 5,
              fontFamily: Fonts.bold,
              fontSize: WIDTH < 375 ? 13 : 14,
            }}>
            Sign in here
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupAuth;

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
