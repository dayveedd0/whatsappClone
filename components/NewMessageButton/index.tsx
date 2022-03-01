import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function NewMessageButton() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="message-reply-text"
        size={28}
        color="white"
      />
    </View>
  );
}
