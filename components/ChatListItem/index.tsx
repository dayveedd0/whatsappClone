import { View, Text, Image } from "react-native";
import React from "react";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  return (
    <View>
      <Image source={{ uri: user.imageUri }} style={styles.avatar} />
      <Text>{chatRoom.lastMessage.content}</Text>
    </View>
  );
};

export default ChatListItem;
