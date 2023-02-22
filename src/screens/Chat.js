import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Received from '../components/Received';
import Sent from '../components/Sent';
import Input from '../components/ChatInput';
import io from 'socket.io-client';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../contants/Colors';
// import {useSelector} from 'react-redux';
// import axios from '../axios';
// import {Colors} from '../contants/Colors';

const socket = io.connect('https://rms-backend-v1.herokuapp.com');
const Chat = ({navigation, route}) => {
  //   const {toUserName, toUserPic, toUserIndex, toUserItem, toUserId} =
  //     route.params;
  const [inputMessage, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  //   const {auth} = useSelector(state => ({...state}));

  //   useEffect(() => {
  //     socket.emit('add-user', auth._id);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  //   const getMsgFunction = async () => {
  //     const response = await axios.post(
  //       '/getmsg',
  //       {
  //         from: auth._id,
  //         to: toUserId,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${auth.accessToken}`,
  //         },
  //       },
  //     );
  //     setMessages(response.data);
  //     console.log(response.data);
  //   };
  //   useEffect(() => {
  //     getMsgFunction();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const handleSendMsg = async () => {
  //     socket.emit('send-msg', {
  //       to: toUserId,
  //       from: auth._id,
  //       msg: inputMessage,
  //     });
  //     await axios.post(
  //       '/addmsg',
  //       {
  //         from: auth._id,
  //         to: toUserId,
  //         message: inputMessage,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${auth.accessToken}`,
  //         },
  //       },
  //     );

  //     const msgs = [...messages];
  //     msgs.push({fromSelf: true, message: inputMessage});
  //     setMessages(msgs);
  //     setMessage('');
  //   };

  //   useEffect(() => {
  //     if (socket) {
  //       socket.on('msg-recieve', msg => {
  //         setArrivalMessage({fromSelf: false, message: msg});
  //       });
  //     }
  //   }, []);

  //   useEffect(() => {
  //     arrivalMessage && setMessages(prev => [...prev, arrivalMessage]);
  //   }, [arrivalMessage]);
  //   useEffect(() => {
  //     scrollRef.current.scrollToEnd({animated: true});
  //   }, [messages]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary} /> */}
      <Header
        navigation={navigation}
        title="Annette Black"
        image="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      />
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
          {messages.map(message => {
            return (
              <>
                {message.fromSelf ? (
                  <Sent time={message.createdAt} message={message.message} />
                ) : (
                  <Received
                    time={message.createdAt}
                    image={
                      'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    }
                    message={message.message}
                  />
                )}
              </>
            );
          })}
        </ScrollView>
        <Input
          inputMessage={inputMessage}
          setMessage={inputMessage => setMessage(inputMessage)}
          // onSendPress={handleSendMsg}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // height: '100%',
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  main: {
    // backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  username: {
    color: '#000119',
    fontFamily: 'Medium',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
