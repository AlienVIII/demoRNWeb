import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
  RefObject,
  InputHTMLAttributes,
  Ref,
} from "react";
import {
  Animated,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
  TextInput,
  Keyboard,
  LayoutChangeEvent,
  TextStyle,
  View,
  GestureResponderEvent,
  TextInputComponent,
} from "react-native";
import { PRIMARY_GRAY_BORDER } from "constants/colors";
import {
  borderRadius,
  size_12,
  size_2,
  size_7,
  txtSize_12,
  size_15,
  txtSize_18,
  size_9,
  size_21,
  size_8,
  size_10,
} from "constants/dimentions";
import { default_Regular } from "constants/fonts";
import { useOrientation } from "utils/hook";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { size_25 } from "constants/dimentions";

interface AnimatedTextProps extends TextInputProps {
  placeholderStyle?: TextStyle;
  placeholder: string;
  wrapperStyle?: ViewStyle;
  secureTextEntry?: boolean;
  cursorColor?: string;
  icon?: JSX.Element;
  textInputStyle?: TextStyle;
  setBlur: Function;
  setTargetID: Function;
}

const AnimatedText = forwardRef<RefObject<TextInput>, AnimatedTextProps>(
  (props, ref) => {
    const isRotate = useOrientation();
    const [tempV, setTempV] = useState("");
    const [placeholderW, setWidthPlaceholderW] = useState(0);
    const [id, setID] = useState(null);
    const [txtInputW, setWidthTxtInputW] = useState(0);
    const [topBorderLength, setTopBorderLength] = useState(0);
    const animatedStatusValue = useRef(new Animated.Value(0)).current;
    const {
      value = "",
      placeholderStyle = {},
      placeholder = "",
      wrapperStyle = {},
      secureTextEntry = false,
      cursorColor = PRIMARY_GRAY_BORDER,
      icon = null,
      textInputStyle = null,
      onChangeText = () => {},
      setBlur = () => {},
      setTargetID = () => {},
    } = props;

    const placeholderAnimatedStyle = useMemo(
      () =>
        placeholderW
          ? {
              top: animatedStatusValue.interpolate({
                inputRange: [0, 1],
                outputRange: [size_7, -size_12],
              }),
              fontSize: animatedStatusValue.interpolate({
                inputRange: [0, 1],
                outputRange: [txtSize_18, txtSize_12],
              }),
            }
          : {
              top: size_7,
              fontSize: txtSize_12,
            },
      [animatedStatusValue, placeholderW]
    );

    const placeholderStyles = useMemo(
      () =>
        StyleSheet.flatten([
          styles.defaultPlaceholderStyle,
          placeholderAnimatedStyle,
          placeholderStyle,
        ]),
      [placeholderAnimatedStyle, placeholderStyle]
    );

    const onLayoutAnimated = useCallback((evt: LayoutChangeEvent) => {
      setWidthPlaceholderW(evt.nativeEvent.layout.width);
    }, []);
    const onLayoutTextInput = useCallback((evt: LayoutChangeEvent) => {
      setID(evt.nativeEvent.target);
      setWidthTxtInputW(evt.nativeEvent.layout.width - size_10);
    }, []);

    // const onButtonClick = useCallback(() => {
    //   if (ref.current && !ref.current.isFocused()) {
    //     return ref.current.focus();
    //   }
    //   return null;
    // }, [ref]);
    const onFocus = () => {
      value.length > 0
        ? null
        : Animated.timing(animatedStatusValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }).start();
      setTargetID(id);
    };
    const onClear = () => {
      if (ref.current) {
        ref.current.clear();
        setTempV("");
        return onChangeText("");
      }
    };
    const onChangeStateText = useCallback(
      (item: string) => {
        setTempV(item);
        onChangeText(item);
      },
      [onChangeText]
    );
    const onBlur = () => {
      value.length > 0
        ? null
        : Animated.timing(animatedStatusValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }).start();
      setBlur();
    };

    useEffect(() => {
      if (tempV !== value) {
        setTempV(value);
      }
    }, [value, tempV]);

    useEffect(() => {
      if (!topBorderLength && placeholderW && txtInputW) {
        setTopBorderLength(txtInputW - size_21 - placeholderW);
      }
    }, [placeholderW, txtInputW, topBorderLength]);

    useEffect(() => {
      setWidthPlaceholderW(0);
      setWidthTxtInputW(0);
      setTopBorderLength(0);
      setID(null);
    }, [isRotate]);

    return (
      <View
        // onPress={onButtonClick}
        // activeOpacity={0.5}
        style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}
      >
        <View style={styles.topLeftCorner} />
        <View style={styles.topRightCorner} />
        <Animated.View
          style={StyleSheet.flatten([
            styles.topBorder,
            {
              width: animatedStatusValue.interpolate({
                inputRange: [0, 1],
                outputRange: [txtInputW - size_8, topBorderLength],
              }),
            },
          ])}
        />
        {icon}
        <Animated.Text onLayout={onLayoutAnimated} style={placeholderStyles}>
          {placeholder}
        </Animated.Text>
        <TextInput
          onLayout={onLayoutTextInput}
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={() => {
            props.onSubmitEditing ? props.onSubmitEditing : null;
            Keyboard.dismiss();
          }}
          onChangeText={onChangeStateText}
          clearButtonMode="while-editing"
          selectionColor={cursorColor}
          underlineColorAndroid="rgba(0,0,0,0)"
          {...props}
          placeholder=""
          style={StyleSheet.flatten([
            styles.textInputDefaultStyles,
            textInputStyle,
          ])}
        />
        {value ? (
          <TouchableOpacity style={styles.clearBtn}>
            <MaterialCommunityIcons
              name="backspace"
              size={size_25}
              color={PRIMARY_GRAY_BORDER}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
);

export default memo(AnimatedText);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius,
    borderLeftWidth: size_2,
    borderRightWidth: size_2,
    borderBottomWidth: size_2,
    borderColor: PRIMARY_GRAY_BORDER,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topLeftCorner: {
    borderTopWidth: size_2,
    borderLeftWidth: size_2,
    width: size_12,
    height: size_7,
    borderTopLeftRadius: borderRadius,
    position: "absolute",
    top: -size_2,
    left: -size_2,
    borderColor: PRIMARY_GRAY_BORDER,
  },
  topRightCorner: {
    borderTopWidth: size_2,
    borderRightWidth: size_2,
    width: size_12,
    height: size_7,
    borderTopRightRadius: borderRadius,
    position: "absolute",
    top: -size_2,
    right: -size_2,
    borderColor: PRIMARY_GRAY_BORDER,
  },
  topBorder: {
    height: size_2,
    alignSelf: "center",
    backgroundColor: PRIMARY_GRAY_BORDER,
    position: "absolute",
    top: -size_2,
    right: size_9,
  },
  textInputDefaultStyles: {
    borderRadius,
    fontSize: txtSize_18,
    lineHeight: txtSize_18,
    flex: 1,
    fontFamily: default_Regular,
  },
  defaultPlaceholderStyle: {
    fontFamily: default_Regular,
    fontSize: txtSize_12,
    color: "darkgray",
    position: "absolute",
    left: size_15,
  },
  clearBtn: {
    paddingHorizontal: size_10,
    justifyContent: "center",
    alignItems: "center",
  },
});
