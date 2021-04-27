import { PRIMARY_LIGHT } from "constants/colors";
import { size_10 } from "constants/dimentions";
import {
  borderRadius,
  size_4,
  size_12,
  size_24,
  statusBarHeight,
  txtSize_24,
  txtSize_36,
  size_49,
  txtSize_18,
  size_1,
  size_2,
} from "constants/dimentions";
import { default_Regular } from "constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cornflowerblue",
    flex: 1,
    paddingHorizontal: size_24,
    paddingVertical: size_24 + statusBarHeight,
  },
  contentWrapper: {
    borderRadius,
    borderWidth: size_4,
    borderColor: PRIMARY_LIGHT,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: size_24,
    paddingTop: size_49,
    paddingBottom: size_12,
  },
  title: {
    fontFamily: default_Regular,
    fontSize: txtSize_36,
    color: PRIMARY_LIGHT,
    letterSpacing: size_1,
  },
  wrapInputs: {
    height: "50%",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "rgba(	216,191,216, 0.3)",
    borderRadius,
    padding: size_10,
  },
  brief: {
    fontFamily: default_Regular,
    fontSize: txtSize_18,
    color: PRIMARY_LIGHT,
    alignSelf: "flex-end",
  },
});

export default styles;
