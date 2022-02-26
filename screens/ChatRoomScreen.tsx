import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function ChatRoomScreen() {
  const route = useRoute();

  return (
    <View>
      <Text>Chat Room</Text>
    </View>
  );
}
