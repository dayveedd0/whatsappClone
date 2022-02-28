import { View, Text } from "react-native";
import React from "react";
import { Message } from "../../types";
import moment from "moment";
import styles from "./style";

export type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage(props: ChatMessageProps) {
  const { message } = props;

  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            alignContent: isMyMessage() ? "flex-end" : "flex-start",
            marginLeft: isMyMessage() ? 50 : 0,
          },
        ]}
      >
        <Text>{message.user.name}</Text>
        <Text>{message.content}</Text>
        <Text>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
}
