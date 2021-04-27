import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";
import { scaleDP } from "../utils/converter";

// Dimensions
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const txtSize_7 = scaleDP(7);
export const txtSize_12 = scaleDP(12);
export const txtSize_16 = scaleDP(16);
export const txtSize_18 = scaleDP(18);
export const txtSize_20 = scaleDP(20);
export const txtSize_21 = scaleDP(21);
export const txtSize_22 = scaleDP(22);
export const txtSize_24 = scaleDP(24);
export const txtSize_26 = scaleDP(26);
export const txtSize_36 = scaleDP(36);
export const txtSize_40 = scaleDP(40);
export const txtSize_45 = scaleDP(45);
export const txtSize_46 = scaleDP(46);
export const txtSize_48 = scaleDP(48);
export const txtSize_60 = scaleDP(60);
export const txtSize_80 = scaleDP(80);
export const txtSize_90 = scaleDP(90);
export const txtSize_100 = scaleDP(100);
export const txtSize_160 = scaleDP(160);

export const borderRadius_2 = scaleDP(2);
export const borderRadius_3 = scaleDP(3);
export const borderRadius = scaleDP(5);
export const borderRadius_8 = scaleDP(8);
export const borderRadius_10 = scaleDP(10);
export const borderRadius_12 = scaleDP(12);

export const size_1 = scaleDP(1);
export const size_2 = scaleDP(2);
export const size_4 = scaleDP(4);
export const size_5 = scaleDP(5);
export const size_6 = scaleDP(6);
export const size_7 = scaleDP(7);
export const size_8 = scaleDP(8);
export const size_9 = scaleDP(9);
export const size_10 = scaleDP(10);
export const size_12 = scaleDP(12);
export const size_13 = scaleDP(13);
export const size_15 = scaleDP(15);
export const size_16 = scaleDP(16);
export const size_18 = scaleDP(18);
export const size_20 = scaleDP(20);
export const size_21 = scaleDP(21);
export const size_22 = scaleDP(22);
export const size_24 = scaleDP(24);
export const size_25 = scaleDP(25);
export const size_30 = scaleDP(30);
export const size_32 = scaleDP(32);
export const size_34 = scaleDP(34);
export const size_36 = scaleDP(36);
export const size_38 = scaleDP(38);
export const size_40 = scaleDP(40);
export const size_41 = scaleDP(41);
export const size_43 = scaleDP(43);
export const size_46 = scaleDP(46);
export const size_49 = scaleDP(49);
export const size_50 = scaleDP(50);
export const size_52 = scaleDP(52);
export const size_54 = scaleDP(54);
export const size_56 = scaleDP(56);
export const size_59 = scaleDP(59);
export const size_60 = scaleDP(60);
export const size_66 = scaleDP(66);
export const size_70 = scaleDP(70);
export const size_72 = scaleDP(72);
export const size_75 = scaleDP(75);
export const size_80 = scaleDP(80);
export const size_85 = scaleDP(85);
export const size_90 = scaleDP(90);
export const size_92 = scaleDP(92);
export const size_100 = scaleDP(100);
export const size_102 = scaleDP(102);
export const size_110 = scaleDP(110);
export const size_113 = scaleDP(113);
export const size_115 = scaleDP(115);
export const size_120 = scaleDP(120);
export const size_126 = scaleDP(126);
export const size_129 = scaleDP(129);
export const size_138 = scaleDP(138);
export const size_140 = scaleDP(140);
export const size_150 = scaleDP(150);
export const size_160 = scaleDP(160);
export const size_170 = scaleDP(170);
export const size_180 = scaleDP(180);
export const size_194 = scaleDP(194);
export const size_201 = scaleDP(201);
export const size_214 = scaleDP(214);
export const size_226 = scaleDP(226);
export const size_240 = scaleDP(240);
export const size_268 = scaleDP(268);
export const size_250 = scaleDP(250);
export const size_285 = scaleDP(285);
export const size_290 = scaleDP(290);
export const size_300 = scaleDP(300);
export const size_353 = scaleDP(353);
export const size_400 = scaleDP(400);
export const size_405 = scaleDP(405);
export const size_435 = scaleDP(435);
export const size_475 = scaleDP(475);
export const size_500 = scaleDP(500);
export const size_540 = scaleDP(540);
export const size_700 = scaleDP(700);
export const size_800 = scaleDP(800);
export const size_860 = scaleDP(860);
export const size_960 = scaleDP(960);
export const size_1000 = scaleDP(1000);
export const size_1160 = scaleDP(1160);
export const size_1163 = scaleDP(1163);

export const largePieSize = PixelRatio.roundToNearestPixel(deviceWidth * 0.8); // 0.5
export const smallPieSize = PixelRatio.roundToNearestPixel(deviceWidth * 0.6); // 0.26

export const diagramPadding = scaleDP(41.4264);

export const TabWidth = Math.round(deviceWidth - size_140);
export const TabHeight = Math.round(deviceHeight - size_115);

function getStatusBarHeight() {
  if (Platform.OS === "ios") {
    if (deviceHeight > 568) {
      return 35;
    }
    return 20;
  }
  const { currentHeight } = StatusBar;
  return currentHeight;
}

export const statusBarHeight = getStatusBarHeight();
