import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";

export default function InputBox() {
  const [message, setMessage] = useState("");

  const onMicrophonePress = () => {
    console.warn("microphone");
  };
  const onSendPress = () => {
    console.warn(`Sending: ${message}`);
    //send a message to the backend;
    setMessage("");
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          style={styles.textInput}
          multiline
          textAlignVertical="top"
          value={message}
          onChangeText={(message) => setMessage(message)}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icons} />
        {!!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icons} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={24} color="white" />
          ) : (
            <MaterialIcons name="send" size={24} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
