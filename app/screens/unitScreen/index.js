import React from "react";
import { View, Button } from "react-native";

const UnitScreen = ({navigation}) => {
  return (
    <View>
      <Button title="go to Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

export default UnitScreen;
