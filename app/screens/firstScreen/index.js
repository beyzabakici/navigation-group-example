import React from "react";
import { Text, Button, View } from "react-native";

const FirstScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FirstScreen</Text>
      <Button
        title="go to SecondScreen"
        onPress={() => navigation.navigate("SecondStack", { screen: "Second" })}
      />
      <Button
        title="go to UnitScreen"
        onPress={() => navigation.navigate("UnitStack", { screen: "unit" })}
      />
      <Button title="go to Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

export default FirstScreen;
