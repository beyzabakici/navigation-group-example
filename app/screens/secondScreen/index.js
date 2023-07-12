import React from "react";
import { Text, View, Button } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SecondScreen</Text>
      <Button
        title="go to Map"
        onPress={() => navigation.navigate("FirstStack", { screen: "Map" })}
      />
      <Button
        title="go to UnitScreen"
        onPress={() => navigation.navigate("UnitStack", { screen: "unit" })}
      />
    </View>
  );
};

export default SecondScreen;
