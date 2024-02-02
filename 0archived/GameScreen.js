import { View, Text, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { ListItem } from "react-native-elements";

const GameScreen = () => {
  console.log("This is the nbaGames data returned", nbaGames);
  // it is an array now.
  const renderNbaGame = ({ item }) => {
    const { shortName, competitors } = item;
    // const { visitorScore, homeScore } = game.scores;

    return (
      <View style={styles.listItem}>
        <Text>{shortName}</Text>
        <Text>{/* {competitors.score} -{scores.visitors.points} */}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={nbaGames}
        renderItem={renderNbaGame}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />

      <Text style={styles.text}>home Team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContent: {
    justifyContent: "center",
    marginTop: 50,
    alignItems: "center",
  },
  listItem: {
    padding: 10,
    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default GameScreen;
