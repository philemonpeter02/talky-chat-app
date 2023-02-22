import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Signin,
  SigninAuth,
  OtpAuth,
  Signup,
  SignupAuth,
  Profile,
  Home,
  Chat,
  OthersProfile,
} from '../screens';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      // onBackPress=
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="SigninAuth" component={SigninAuth} />
      <Stack.Screen name="OtpAuth" component={OtpAuth} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupAuth" component={SignupAuth} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="OthersProfile" component={OthersProfile} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
