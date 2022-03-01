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
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>
          {moment(message.createdAt).calendar(null, {
            sameDay: "H:Ma",
            nextDay: "[Tomorrow]",
            nextWeek: "DD MM YYYY",
            lastDay: "[yesterday at :] H:Ma ",
            lastWeek: "[last] H:MMa",
            sameElse: "DD/MM/YYYY H:MMa",
          })}
        </Text>
      </View>
    </View>
  );
}
