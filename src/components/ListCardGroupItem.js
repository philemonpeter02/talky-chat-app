import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from 'react-native-paper';
import {Colors} from '../contants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import {Fonts} from '../contants/Fonts';
import {RadioButton} from 'react-native-paper';
const ListCardGroupItem = ({item}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#F7F7F9',
      }}>
      <Avatar.Image
        size={50}
        style={{backgroundColor: '#F0F0F0'}}
        source={item.profilePicture}
      />
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <Text
          numberOfLines={1}
          style={[
            styles.centerText,
            {fontFamily: Fonts.semiBold, fontSize: 16, color: Colors.tertiary},
          ]}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.centerText}>
          {item.status}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <RadioButton
          color={Colors.primary}
          value={item.id}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
        />
      </View>
    </View>
  );
};

export default ListCardGroupItem;

const styles = StyleSheet.create({
  lastActive: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    color: '#58616A',
    textAlign: 'right',
    marginRight: 10,
  },
  centerText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: '#58616A',
    textAlign: 'left',
    marginLeft: 10,
  },
});
