import React from "react";
import { Text, Button, View } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <Button title="go to Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

export default SearchScreen;
