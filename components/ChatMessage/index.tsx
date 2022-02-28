import { View, Text } from "react-native";
import React from "react";
import { Message } from "../../types";
import moment from "moment";

export type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage(props: ChatMessageProps) {
  const { message } = props;

  return (
    <View>
      <Text>{message.user.name}</Text>
      <Text>{message.content}</Text>
      <Text>{moment(message.createdAt).fromNow()}</Text>
    </View>
  );
}
