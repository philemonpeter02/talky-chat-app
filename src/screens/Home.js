import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../contants/Colors';
import {TouchableRipple} from 'react-native-paper';
import HeaderHome from '../components/HeaderHome';
import {Fonts} from '../contants/Fonts';
import FloatingMenu from '../components/FloatingMenu';
import ListCardItem from '../components/ListCardItem';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import InputField from '../components/InputField';
import ListCardGroupItem from '../components/ListCardGroupItem';
const Home = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [popupOpened, setPopupOpened] = useState(false);
  const [data, setData] = useState({
    search: '',
    group: '',
  });
  //Groups popup
  // ref
  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ['100%'], []);
  // callbacks
  const handlePresentModalPress = () => {
    if (popupOpened === false) {
      bottomSheetRef.current?.present();
      setPopupOpened(true);
    } else {
      bottomSheetRef.current?.dismiss();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 25}}>
        <HeaderHome navigation={navigation} />
        <View style={styles.titleBox}>
          <TouchableRipple
            onPress={() => setActiveTab(1)}
            style={[
              styles.chatTitleContainer,
              {
                marginRight: 2.5,
                backgroundColor:
                  activeTab === 1 ? Colors.secondary : 'transparent',
                shadowColor: activeTab === 1 ? '#000' : 'transparent',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
              },
            ]}>
            <Text
              style={[
                styles.chatTitleText,
                {
                  fontSize: activeTab === 1 ? 16 : 12,
                },
              ]}>
              Chats
            </Text>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => setActiveTab(2)}
            style={[
              styles.chatTitleContainer,
              {
                backgroundColor:
                  activeTab === 2 ? Colors.secondary : 'transparent',
                marginLeft: 2.5,
                shadowColor: activeTab === 2 ? '#000' : 'transparent',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
              },
            ]}>
            <Text
              style={[
                styles.chatTitleText,
                {
                  fontSize: activeTab === 2 ? 16 : 12,
                },
              ]}>
              Groups
            </Text>
          </TouchableRipple>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={listData}
        renderItem={({item, index}) => (
          <ListCardItem key={index} item={item} navigation={navigation} />
        )}
      />
      <Groups
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPoints}
        setPopupOpened={setPopupOpened}
        setData={setData}
        data={data}
        handlePresentModalPress={handlePresentModalPress}
      />
      {popupOpened === false && (
        <FloatingMenu onPress={handlePresentModalPress} />
      )}
    </SafeAreaView>
  );
};

export default Home;

const Groups = ({
  bottomSheetRef,
  snapPoints,
  setPopupOpened,
  handlePresentModalPress,
  setData,
  data,
}) => {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onDismiss={() => {
          setPopupOpened(false);
        }}
        backgroundStyle={{
          backgroundColor: Colors.secondary,
        }}
        handleIndicatorStyle={{backgroundColor: 'transparent'}}
        enableContentPanningGesture={false}
        style={{paddingHorizontal: 25}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            onPress={handlePresentModalPress}
            style={{
              fontSize: 16,
              fontFamily: Fonts.bold,
              color: Colors.primary,
            }}>
            Cancel
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.bold,
              color: Colors.tertiary,
            }}>
            Group
          </Text>
          <Text
            onPress={handlePresentModalPress}
            style={{
              fontSize: 16,
              fontFamily: Fonts.bold,
              color: Colors.primary,
            }}>
            Done
          </Text>
        </View>
        <View style={{marginTop: 15}} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <InputField
            placeholder="Search"
            text={data.search}
            setText={setData}
            formKey="search"
            icon="magnify"
          />
          <View style={{marginTop: 15}} />
          <InputField
            placeholder="Group Name"
            text={data.group}
            setText={setData}
            formKey="group"
          />
          <View style={{marginTop: 15}} />
          <Text
            style={{
              fontFamily: Fonts.semiBold,
              fontSize: 16,
              color: Colors.tertiary,
            }}>
            Contacts
          </Text>
          <View style={{marginTop: 15}} />
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEnabled={false}
            data={listData}
            renderItem={({item, index}) => (
              <ListCardGroupItem key={index} item={item} />
            )}
          />
        </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },

  titleBox: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F7F7F9',
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  chatTitleContainer: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    flex: 1,
  },
  chatTitleText: {
    fontFamily: Fonts.bold,
    color: Colors.tertiary,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

const listData = [
  {
    id: 1,
    name: 'Annette Black',
    lastMsg: 'Hey, did you talk to her?',
    lastActive: '2min ago',
    profilePicture: require('../assets/images/profile1.png'),
    status: 'Away',
  },
  {
    id: 2,
    name: 'Cameron Williams',
    lastMsg: 'Ok, Cya.  🤗',
    lastActive: '2d ago',
    profilePicture: require('../assets/images/profile2.png'),
    status: 'At work',
  },
  {
    id: 3,
    name: 'Jane Cooper',
    lastMsg: 'Thanks, ill call you once i get there. See you soon!',
    lastActive: '15min ago',
    profilePicture: require('../assets/images/profile3.png'),
  },
  {
    id: 4,
    name: 'Brennda Smily',
    lastMsg: 'Sent a picture',
    lastActive: '1d ago',
    profilePicture: require('../assets/images/profile2.png'),
    status: 'Busy',
  },
  {
    id: 5,
    name: 'Jacob Jones',
    lastMsg: 'Missed a call',
    lastActive: '2min ago',
    profilePicture: require('../assets/images/profile3.png'),
    status: 'Offline',
  },
  {
    id: 6,
    name: 'Annette Black',
    lastMsg: 'Hey, did you talk to her?',
    lastActive: '2min ago',
    profilePicture: require('../assets/images/profile1.png'),
    status: 'Away',
  },
  {
    id: 7,
    name: 'Cameron Williams',
    lastMsg: 'Ok, Cya.  🤗',
    lastActive: '2d ago',
    profilePicture: require('../assets/images/profile2.png'),
    status: 'Busy',
  },
  {
    id: 8,
    name: 'Jane Cooper',
    lastMsg: 'Thanks, ill call you once i get there. See you soon!',
    lastActive: '15min ago',
    profilePicture: require('../assets/images/profile3.png'),
    status: 'Busy',
  },
  {
    id: 9,
    name: 'Brennda Smily',
    lastMsg: 'Sent a picture',
    lastActive: '1d ago',
    profilePicture: require('../assets/images/profile2.png'),
    status: 'Away',
  },
  {
    id: 10,
    name: 'Jacob Jones',
    lastMsg: 'Missed a call',
    lastActive: '2min ago',
    profilePicture: require('../assets/images/profile3.png'),
    status: 'Available',
  },
];
