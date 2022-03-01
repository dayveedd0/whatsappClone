import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ChatRoom } from "../../types";
import styles from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("ChatRoom", { id: chatRoom.id, name: user.name });
  };
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text>
          {moment(chatRoom.lastMessage.createdAt).calendar(null, {
            sameDay: "H:Ma",
            nextDay: "[Tomorrow]",
            nextWeek: "DD MM YYYY",
            lastDay: "[yesterday at :] H:Ma ",
            lastWeek: "[last] H:MMa",
            sameElse: "DD/MM/YYYY H:MMa",
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
