import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment";
const Received = ({ image, message, time, group, user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />
      <View>
        {group && (
          <Text style={[styles.message, { fontFamily: "Semi", fontSize: 12 }]}>
            {user}
          </Text>
        )}
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.duration}>{moment(time).format("h:mm A")}</Text>
      </View>
    </View>
  );
};
export default Received;
const styles = StyleSheet.create({
  duration: {
    color: "#b6b6b6",
    fontSize: 11,
    marginHorizontal: 15,
    marginTop: 5,
    fontFamily: "Regular",
  },
  container: {
    flexDirection: "row",
    marginTop: 20,
    width: 250,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  message: {
    fontSize: 13,
    marginHorizontal: 15,
    fontFamily: "Regular",
  },
});
