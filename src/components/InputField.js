import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Menu, TextInput, TouchableRipple} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import {WIDTH} from '../contants/Dimensions';
import {Fonts} from '../contants/Fonts';
import MaskInput, {Masks} from 'react-native-mask-input';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/EvilIcons';
const InputField = ({text, setText, placeholder, formKey, icon}) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onChangeHandler = (value, name) => {
    console.log(value);
    // how to handle for each state field
    setText(form => ({
      ...form,
      [name]: value,
    }));
  };

  return (
    <>
      {formKey === 'phone' ? (
        <TextInput
          placeholder={placeholder}
          value={text}
          onChangeText={text => onChangeHandler(text, formKey)}
          mode="outlined"
          outlineColor="rgba(170, 176, 183,0.8)"
          activeOutlineColor="rgba(55,125,255,0.8)"
          selectionColor="rgba(55,125,255,0.8)"
          placeholderTextColor={'#AAB0B7'}
          theme={{roundness: 8}}
          contentStyle={{height: 60}}
          style={styles.main}
          // {...props}
          render={inputProps => (
            <View style={styles.customInputContainer}>
              <View
                style={[
                  styles.customInputInnerItem,
                  {
                    borderRightWidth: 1,
                    borderColor: 'rgba(170, 176, 183,0.8)',
                  },
                ]}>
                <Image
                  source={require('../assets/images/US.png')}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={{
                  paddingLeft: 15,
                  fontFamily: Fonts.medium,
                  color: text.length > 0 ? Colors.tertiary : 'transparent',
                  fontSize: WIDTH < 375 ? 13 : 14,
                }}>
                +1
              </Text>
              <MaskInput
                {...inputProps}
                mask={Masks.USA_PHONE}
                keyboardType="numeric"
                // maxLength={19}
                style={styles.maskInput}
              />
              {/* {right && <View>{right}</View>} */}
            </View>
          )}
        />
      ) : formKey === 'status' ? (
        <TextInput
          placeholder={placeholder}
          value={text}
          onChangeText={text => onChangeHandler(text, formKey)}
          mode="outlined"
          outlineColor="rgba(170, 176, 183,0.8)"
          activeOutlineColor="rgba(55,125,255,0.8)"
          selectionColor="rgba(55,125,255,0.8)"
          placeholderTextColor={'#AAB0B7'}
          theme={{roundness: 8}}
          contentStyle={{height: 60}}
          style={styles.main}
          // {...props}
          render={inputProps => (
            <View style={styles.customInputContainer}>
              <View style={styles.customInputInnerItem}>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    backgroundColor:
                      text === 'Available'
                        ? '#2DCA8C'
                        : text === 'Away'
                        ? '#FFCC00'
                        : '#AAB0B7',
                    borderRadius: 20,
                  }}
                />
              </View>
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  color: text.length < 1 ? '#AAB0B7' : Colors.tertiary,
                  fontSize: WIDTH < 375 ? 13 : 14,
                  flex: 1,
                  // marginLeft:
                }}>
                {text.length < 1 ? placeholder : text}
              </Text>

              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <TouchableRipple
                    onPress={openMenu}
                    style={[
                      {
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderLeftWidth: 1,
                        borderColor: 'rgba(170, 176, 183,0.8)',
                        marginLeft: 'auto',
                      },
                    ]}>
                    <Icon
                      name="chevron-down"
                      size={30}
                      color={Colors.tertiary}
                    />
                  </TouchableRipple>
                }
                style={{
                  height: 50,
                  right: 25,
                  left: 25,
                }}
                contentStyle={{
                  backgroundColor: Colors.secondary,
                  borderRadius: 8,
                }}>
                <>
                  <Menu.Item
                    titleStyle={styles.menuText}
                    onPress={() => {
                      closeMenu();
                      onChangeHandler('Available', formKey);
                    }}
                    title="Available"
                  />
                  <Menu.Item
                    titleStyle={styles.menuText}
                    onPress={() => {
                      closeMenu();
                      onChangeHandler('Away', formKey);
                    }}
                    title="Away"
                  />
                  <Menu.Item
                    titleStyle={styles.menuText}
                    onPress={() => {
                      closeMenu();
                      onChangeHandler('Offline', formKey);
                    }}
                    title="Offline"
                  />
                </>
              </Menu>
            </View>
          )}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          value={text}
          mode="outlined"
          onChangeText={text => onChangeHandler(text, formKey)}
          outlineColor="rgba(170, 176, 183,0.8)"
          activeOutlineColor="rgba(55,125,255,0.8)"
          selectionColor="rgba(55,125,255,0.8)"
          textColor={Colors.tertiary}
          placeholderTextColor={'#AAB0B7'}
          theme={{roundness: 8}}
          contentStyle={{height: 60}}
          style={styles.main}
          secureTextEntry={
            formKey === 'password' && show === false ? true : false
          }
          right={
            formKey === 'password' ? (
              <TextInput.Icon
                style={{
                  height: 60,
                  marginBottom: -5,
                }}
                onPress={() => setShow(!show)}
                icon={show ? 'eye' : 'eye-off'}
              />
            ) : icon ? (
              <TextInput.Icon
                style={{
                  height: 60,
                  marginBottom: -5,
                }}
                icon={icon}
              />
            ) : null
          }
        />
      )}
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  main: {
    fontFamily: Fonts.medium,
    width: '100%',
    fontSize: WIDTH < 375 ? 13 : 14,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  customInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  customInputInnerItem: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskInput: {
    backgroundColor: 'transparent',
    flex: 1,
    fontFamily: Fonts.medium,
    color: Colors.tertiary,
    fontSize: WIDTH < 375 ? 13 : 14,
  },
  menuText: {
    fontFamily: Fonts.regular,
    color: Colors.tertiary,
    fontSize: WIDTH < 375 ? 13 : 14,
  },
});
