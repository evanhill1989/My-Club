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
import GameCard from "../components/GameCard";
import { fetchRoster } from "../features/nba/nbaRostersSlice";
// import PlayerCardsView from "../components/PlayerCardsView";

// Rest of the code...

const TeamScreen = ({ route }) => {
  const dispatch = useDispatch();
  console.log("This is the route params", route.params);

  const teamId = route.params.team.id;
  useEffect(() => {
    dispatch(fetchRoster(teamId));
  }, [dispatch]);

  const team = route.params.team.teamName;

  const nbaGames = useSelector((state) => state.nba.gamesArray);

  const rosterData = useSelector((state) => state.nbaRosters.rosterArray);
  const { athletes } = rosterData;
  console.log("These are the athletes", athletes);
  const PlayerCardsView = ({ athletes }) => {
    console.log("These are the athletes", athletes);

    // const PlayerCard = ({ player }) => {
    //   return (

    //   );
    // };

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Player Cards */}
        {/* {athletes ? (
          <View> */}
        {athletes.map((player, index) => (
          <View style={styles.playerCard}>
            <Image
              source={{ uri: player.headshot.href }}
              style={styles.playerImage}
            />
            <Text style={styles.playerName}>{player.displayName}</Text>
          </View>
        ))}
        {/* </View>
        ) : (
          <Text>Loading...</Text> // or another loading indicator
        )} */}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {athletes ? (
        <PlayerCardsView athletes={athletes} />
      ) : (
        <Text>Loading...</Text> // or another loading indicator
      )}
      <GameCard team={team} nbaGames={nbaGames} />
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

export default TeamScreen;
