import React from "react";
import { View } from "react-native";
import Button from "./Button";

export default () =>
  <View alignItems="center" justifyContent="center" height="100%">
    <Button onPress={() => alert("Primary!")} type="primary" marginBottom={10}>
      Do this
    </Button>
    <Button onPress={() => alert("Secondary!")} type="secondary">
      Do that
    </Button>
  </View>;
