import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const setValueByWidth = (value: Number, isTrue: ?Boolean) => {
  if (isTrue) {
    return (width / 1920) * value;
  }
  return PixelRatio.roundToNearestPixel((height / 1200) * value);
  // return (height / 1200) * value;
};

setValueByWidth.defaultProps = {
  isTrue: true,
};

export const scaleDP = value => PixelRatio.roundToNearestPixel(value); //value * (160 / 224);
