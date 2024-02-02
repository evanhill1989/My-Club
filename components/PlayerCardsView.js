import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import { fetchRoster } from "../features/nba/nbaRostersSlice";
import PlayerCard from "./PlayerCard";

const PlayerCardsView = ({ players }) => {
  const { athletes } = players;
  // athletes is undefined?
  console.log("These are the athletes", athletes);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Player Cards */}
      {athletes.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </ScrollView>
  );
};

styles = StyleSheet.create({
  container: {
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
  // Styles for the player cards which might move to a separate file
  playerCard: {
    width: 150,
    marginHorizontal: 10,
    alignItems: "center",
  },
  playerImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  playerName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PlayerCardsView;
