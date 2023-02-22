import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../contants/Colors';
import Header from '../components/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Avatar, TouchableRipple, FAB} from 'react-native-paper';
import {WIDTH} from '../contants/Dimensions';
import InputField from '../components/InputField';
import ButtonInput from '../components/ButtonInput';
const Profile = ({navigation, route}) => {
  const [data, setData] = useState({
    name: '',
    description: '',
    status: '',
  });
  const {type} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} title="Profile" type={type} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: WIDTH / 2,
            alignSelf: 'center',
            marginBottom: 50,
          }}>
          <Avatar.Image
            size={WIDTH / 2}
            style={{backgroundColor: '#F0F0F0'}}
            source={require('../assets/images/avatar.png')}
          />
          <FAB
            icon="pencil-outline"
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <InputField
          placeholder="Enter your name or nickname"
          text={data.name}
          setText={setData}
          formKey="name"
        />
        <View style={{marginTop: 15}} />
        <InputField
          placeholder="Enter a description"
          text={data.description}
          setText={setData}
          formKey="description"
        />
        <View style={{marginTop: 15}} />
        <InputField
          placeholder="Select a status"
          text={data.status}
          setText={setData}
          formKey="status"
        />
        {type === 'create' && (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ButtonInput
              text="Complete"
              alternate={true}
              onPress={() => navigation.replace('Home')}
            />
          </View>
        )}
        <View style={{marginTop: 50}} />
        {type === 'edit' && (
          <>
            <FlatList
              data={imgData}
              contentContainerStyle={
                {
                  // padding: 25,
                  // paddingBottom: 25,
                }
              }
              numColumns={3}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              ItemSeparatorComponent={<View style={{marginVertical: 10}} />}
              renderItem={({item, index}) => (
                <Image
                  source={item.img}
                  style={{
                    width: WIDTH / 3.8,
                    height: WIDTH / 3.8,
                    borderRadius: 8,
                  }}
                  resizeMode="cover"
                />
              )}
            />
            <View style={{marginTop: 50}} />
          </>
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  fab: {
    position: 'absolute',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Colors.primary,
    right: 0,
    bottom: 10,
  },
});

const imgData = [
  {id: 1, img: require('../assets/images/post.png')},
  {id: 2, img: require('../assets/images/post1.png')},
  {id: 3, img: require('../assets/images/post2.png')},
  {id: 4, img: require('../assets/images/post3.png')},
  {id: 5, img: require('../assets/images/post4.png')},
  {id: 6, img: require('../assets/images/post5.png')},
];
