import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React from "react";
import styles from "./styles";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";

export default function InputBox() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FontAwesome5 name="laugh-beam" size={24} color="grey" />
          <TextInput
            style={styles.textInput}
            multiline
            textAlignVertical="top"
          />
          <Entypo
            name="attachment"
            size={24}
            color="grey"
            style={styles.icons}
          />
          <Fontisto name="camera" size={24} color="grey" style={styles.icons} />
        </View>
        <View style={styles.buttonContainer}>
          <MaterialCommunityIcons name="microphone" size={24} color="white" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
