import React from "react";
import {Text} from 'react-native';
import Button from "react-native-button";
import glamorous from "glamorous-native";

const baseStyle = {
  width: 270,
  paddingVertical: 10
};

const primaryStyle = {
  color: "#ffffff",
  backgroundColor: "#111111"
};

const secondaryStyle = {
  color: "#111111",
  borderColor: "#111111",
  borderWidth: 1
};

const StyledButton = glamorous(Button, {rootEl: Text})(
  baseStyle,
  props => (props.type === "primary" ? primaryStyle : secondaryStyle)
);

StyledButton.propsAreStyleOverrides = true;

export default StyledButton;
