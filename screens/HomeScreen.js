import { Text, View, StyleSheet } from "react-native";

import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 16, // Add padding to provide spacing
  },
  listItemContainer: {
    flexDirection: "row", // Align title and subtitle horizontally
    alignItems: "center", // Center vertically
    marginBottom: 8, // Add margin to separate list items
  },
  listItemTitle: {
    flex: 1, // Allow the title to expand
    marginRight: 16, // Add some margin between title and subtitle
  },
  listItemSubtitle: {
    flex: 1, // Allow the subtitle to expand
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.listItemContainer}
        onPress={() => navigation.navigate("Nba")}
      >
        NBA screen
      </Text>
      <Text
        style={styles.listItemContainer}
        onPress={() => navigation.navigate("Nfl")}
      >
        NFL screen
      </Text>
      <Text
        style={styles.listItemContainer}
        onPress={() => navigation.navigate("Epl")}
      >
        EPL screen
      </Text>
    </View>
  );
};

export default HomeScreen;
