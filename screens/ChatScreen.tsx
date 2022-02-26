import { StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function ChatScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={{ lastMessage: { content: "helloThere" } }} />
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
