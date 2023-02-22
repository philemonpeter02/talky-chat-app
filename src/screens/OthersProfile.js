import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../contants/Colors';
import Header from '../components/Header';
import {Avatar} from 'react-native-paper';
import {HEIGHT, WIDTH} from '../contants/Dimensions';
import {Fonts} from '../contants/Fonts';
import TabButtons from '../components/TabButtons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
  interpolateColor,
} from 'react-native-reanimated';
import ListCardItem from '../components/ListCardItem';
const OthersProfile = ({navigation, route}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [size, setSize] = useState(WIDTH / 2);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const {image, title} = route.params;

  const progress = useSharedValue(WIDTH / 2);
  const progressOpacity = useSharedValue(1);
  const progressText = useSharedValue(WIDTH < 375 ? 16 : 18);
  const progressSubText = useSharedValue(WIDTH < 375 ? 13 : 14);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      height: progress.value,
      opacity: progressOpacity.value,
    };
  }, []);
  const reanimatedTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: progressText.value,
      opacity: progressOpacity.value,
    };
  }, []);
  const reanimatedSubTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: progressSubText.value,
      opacity: progressOpacity.value,
    };
  }, []);

  //Update tabs functions
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
    setActiveTab(currentIndex + 1);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (currentSlideIndex === 1) {
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex === 0) {
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <Animated.View style={[styles.imageContainer, reanimatedStyle]}>
        <Avatar.Image
          size={size}
          style={{backgroundColor: '#F0F0F0'}}
          source={image ? {uri: image} : require('../assets/images/avatar.png')}
        />
      </Animated.View>
      <Animated.Text
        style={[
          {
            marginTop: size === 0 ? 0 : 25,
            color: Colors.tertiary,
            fontFamily: Fonts.bold,
            fontSize: WIDTH < 375 ? 16 : 18,
            textAlign: 'center',
          },
          reanimatedTextStyle,
        ]}>
        {title}
      </Animated.Text>
      <Animated.Text
        style={[
          {
            marginTop: size === 0 ? 0 : 10,
            color: '#58616A',
            fontFamily: Fonts.medium,
            fontSize: WIDTH < 375 ? 13 : 14,
            textAlign: 'center',
          },
          reanimatedSubTextStyle,
        ]}>
        At Work.
      </Animated.Text>
      <TabButtons
        size={size}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
      <ScrollView
        scrollEventThrottle={16}
        onMomentumScrollBegin={e => {
          if (e.nativeEvent.contentOffset.y !== 0) {
            progress.value = withTiming(0);
            progressText.value = withSpring(0);
            progressSubText.value = withSpring(0);
            progressOpacity.value = withSpring(0);
            setSize(0);
          } else {
            progress.value = withSpring(WIDTH / 2);
            progressText.value = withSpring(WIDTH < 375 ? 16 : 18);
            progressSubText.value = withSpring(WIDTH < 375 ? 13 : 14);
            progressOpacity.value = withSpring(1);
            setSize(WIDTH / 2);
          }
        }}
        /////////
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 25,
        }}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          horizontal
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={WIDTH}
          onScrollEndDrag={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={({item}) => <Slide item={item} navigation={navigation} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const Slide = ({item, navigation}) => {
  return (
    <View
      style={{
        // alignItems: 'center',
        justifyContent: 'flex-start',
        width: WIDTH,
        // height: HEIGHT,
      }}>
      {item.id === 1 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={listData}
          renderItem={({item, index}) => (
            <ListCardItem key={index} item={item} navigation={navigation} />
          )}
        />
      ) : (
        <FlatList
          data={imgData}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={{paddingHorizontal: 25}}
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
      )}
      <View style={{marginTop: 50}} />
    </View>
  );
};

export default OthersProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  imageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
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

const slides = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
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
