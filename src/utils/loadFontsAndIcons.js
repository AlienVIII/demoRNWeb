// Use prebuilt version of RNVI in dist folder
import IconFontAwesome from "react-native-vector-icons/dist/FontAwesome";
import IconMaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";

// Generate required css
import iconFontAwesomeFont from "react-native-vector-icons/Fonts/FontAwesome.ttf";
const iconFontAwesomeFontStyles = `@font-face {
  src: url(${iconFontAwesomeFont});
  font-family: FontAwesome;
}`;

import iconMaterialCommunityIconsFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
const iconMaterialCommunityIconsStyles = `@font-face {
  src: url(${iconMaterialCommunityIconsFont});
  font-family: MaterialCommunityIcons;
}`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontAwesomeFontStyles;
  style.styleSheet.cssText = iconMaterialCommunityIconsStyles;
} else {
  style.appendChild(document.createTextNode(iconFontAwesomeFontStyles));
  style.appendChild(document.createTextNode(iconMaterialCommunityIconsStyles));
}

// Inject stylesheet
document.head.appendChild(style);
