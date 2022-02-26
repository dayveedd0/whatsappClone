import { StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import chatRooms from "../data/ChatRooms";

export default function ChatScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={chatRooms[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
