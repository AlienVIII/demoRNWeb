import React, { memo, useCallback, useState, useRef, RefObject } from "react";
import {
  View,
  Text,
  Animated,
  PanResponder,
  Keyboard,
  GestureResponderEvent,
  TextInput,
} from "react-native";
import styles from "./styles";
import AnimatedTextInput from "components/common/AnimatedTextInput";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameInput = useRef<RefObject<TextInput>>().current;
  const passwordInput = useRef<RefObject<TextInput>>().current;
  const target = useRef(null);

  const checkBlur = (nextTg: number | string) => {
    target && nextTg !== target.current ? setBlur() : null;
  };

  const onPanResponderRelease = (event: GestureResponderEvent) => {
    checkBlur(event.nativeEvent.target);
  };
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease,
    })
  ).current;

  const setTargetID = useCallback(
    (id) => {
      if (target.current && target.current === id) {
        return null;
      }
      target.current = id;
    },
    [target]
  );

  const setBlur = useCallback(() => {
    target.current = null;
    usernameInput?.current?.blur();
    passwordInput?.current?.blur();
    Keyboard.dismiss();
  }, [passwordInput, usernameInput, target]);

  return (
    // <LinearGradient
    //   colors={["#2980B9", "#6DD5FA", "#FFFFFF"]}
    //   start={{ x: 1, y: 0 }}
    //   end={{ x: 0, y: 1 }}
    //   style={styles.container}
    // >
    <View style={styles.container}>
      <View style={styles.contentWrapper} {...panResponder.panHandlers}>
        <Animated.Text style={styles.title}>Log In</Animated.Text>
        <View style={styles.wrapInputs}>
          <AnimatedTextInput
            ref={usernameInput}
            value={username}
            placeholder="username"
            onChangeText={(newVl) => setUsername(newVl)}
            setTargetID={setTargetID}
            setBlur={setBlur}
          />
          <AnimatedTextInput
            ref={passwordInput}
            value={password}
            placeholder="password"
            onChangeText={(newVl) => setPassword(newVl)}
            setTargetID={setTargetID}
            setBlur={setBlur}
          />
        </View>
        <Text style={styles.brief}>Three-legged crow</Text>
      </View>
    </View>
    // </LinearGradient>
  );
};

export default memo(LogIn);
