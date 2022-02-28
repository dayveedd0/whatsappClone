import { View, Text, FlatList } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import chatRoomData from "../data/Chats";
import Chats from "../data/Chats";
import ChatMessage from "../components/ChatMessage";

export default function ChatRoomScreen() {
  const route = useRoute();

  return (
    <FlatList
      data={chatRoomData.messages}
      renderItem={({ item }) => <ChatMessage message={item} />}
    />
  );
}
