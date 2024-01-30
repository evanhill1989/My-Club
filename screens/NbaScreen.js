import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { NBA } from "../app/shared/NBA";

/*  {
    teamName: "Toronto Raptors",
    abbreviation: "TOR",
    city: "Toronto",
    state: "Ontario",
    conference: "Eastern",
    division: "Atlantic",
  },
*/

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

const NbaScreen = () => {
  const [nbaTeams, setNbateams] = useState(NBA);

  const renderNbaItem = ({ item: team }) => {
    const { teamName, conference } = team;

    return (
      <ListItem
        style={styles.listItemContainer}
        onPress={() => navigation.navigate("CampsiteInfo", { team })}
      >
        {/* <Avatar source={team.image} rounded /> */}
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

export default NbaScreen;
