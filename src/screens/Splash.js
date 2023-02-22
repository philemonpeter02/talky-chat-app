import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../contants/Colors';
import {LogoWhite} from '../assets/svgs/LogoSvgs';
import {WIDTH} from '../contants/Dimensions';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Signin'), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <LogoWhite width={WIDTH / 1.5} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
