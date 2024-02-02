import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { NBA } from "../app/shared/NBA";
import { nbaScoreboard } from "../app/shared/nbaScoreboard";
import TeamScreen from "./TeamScreen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../features/nba/nbaSlice";

const NbaScreen = ({ navigation }) => {
  const [nbaTeams, setNbateams] = useState(NBA);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const renderNbaItem = ({ item: team }) => {
    const { teamName, conference } = team;

    return (
      <ListItem
        style={styles.listItemContainer}
        onPress={() => navigation.navigate("Team", { team })}
      >
        <Avatar source={{ uri: team.logo }} rounded />
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>
            {teamName}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.listItemSubtitle}>
            {conference}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <Text>NBA Screen</Text>
      <FlatList
        data={nbaTeams}
        renderItem={renderNbaItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default NbaScreen;
