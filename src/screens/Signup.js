import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoDark} from '../assets/svgs/LogoSvgs';
import {HEIGHT, WIDTH} from '../contants/Dimensions';
import {Colors} from '../contants/Colors';
import ButtonInput from '../components/ButtonInput';
import {FacebookIcon, GoogleIcon} from '../assets/svgs/SocialIcons';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: HEIGHT / 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LogoDark width={WIDTH / 2} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <ButtonInput
          icon={<GoogleIcon />}
          text="Sign in with Google"
          onPress={() =>
            navigation.navigate('SignupAuth', {
              type: 'social',
            })
          }
        />
        <View style={{marginTop: 15}} />
        <ButtonInput icon={<FacebookIcon />} text="Sign in with Facebook" />
        <View style={{marginTop: 15}} />
        <ButtonInput icon={<FacebookIcon />} text="Sign in with Facebook" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 25,
          }}>
          <View
            style={{height: 1, flex: 1, backgroundColor: Colors.tertiary}}
          />
          <Text style={{color: '#58616A', marginHorizontal: 15}}>or</Text>
          <View
            style={{height: 1, flex: 1, backgroundColor: Colors.tertiary}}
          />
        </View>
        <ButtonInput
          onPress={() =>
            navigation.navigate('SignupAuth', {
              type: 'phone',
            })
          }
          text="Continue with phone number"
        />
        <Text
          onPress={() => console.log('HI')}
          style={{
            color: Colors.tertiary,
            marginTop: 50,
            fontFamily: 'Inter-Medium',
            fontSize: WIDTH < 375 ? 13 : 14,
          }}>
          Already have an account?
        </Text>
        <Text
          onPress={() => navigation.replace('Signin')}
          style={{
            color: Colors.primary,
            marginTop: 10,
            fontFamily: 'Inter-Bold',
            fontSize: WIDTH < 375 ? 13 : 14,
          }}>
          Sign in here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 25,
  },
});
