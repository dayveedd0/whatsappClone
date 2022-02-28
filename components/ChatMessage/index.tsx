import { View, Text } from "react-native";
import React from "react";
import { Message } from "../../types";

export type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage(props: ChatMessageProps) {
  const { message } = props;

  return <Text>{message.content}</Text>;
}
