import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { useState } from "react";
import { gamesData } from "../app/shared/nbaScoreboard";

const GameCard = ({ nbaGames, team }) => {
  console.log("This is the team prop passed from TeamScreen:", team);
  const { events } = nbaGames;

  let teamFound = false;

  // Initialize an empty array to store matching events

  // Iterate through the Events array

  // Initialize an empty array to store matching events
  const matchingEvent = [];

  events.forEach((event) => {
    const competitions = event.competitions;

    competitions.forEach((competition) => {
      const competitors = competition.competitors;

      competitors.forEach((competitor) => {
        if (competitor.team.displayName.toLowerCase() === team.toLowerCase()) {
          teamFound = true;
        }
      });
    });

    // If the team is found in any competition of the event, push the event to the matchingEvents array
    if (teamFound) {
      matchingEvent.push(event);
    }
  });

  // find the game in events where the team prop matches the teamName

  // Check if matchingEvent is empty
  if (matchingEvent.length === 0) {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.gameTitle}>No game today</Text>
      </View>
    );
  }

  const { name, date, competitions } = matchingEvent[0]; // matchingEvent[0] goes here eventually
  const { competitors } = competitions[0]; // works because we're just taking first array item, which is 1 game.

  const homeTeam = competitors.find(
    (competitor) => competitor.homeAway === "home"
  );

  const awayTeam = competitors.find(
    (competitor) => competitor.homeAway === "away"
  );

  // find if user team is home or away
  const myTeam =
    homeTeam.team.displayName.toLowerCase() === team.toLowerCase()
      ? homeTeam
      : awayTeam;

  // Find the object where homeAway is "home"

  return (
    <View>
      <View style={styles.cardContainer}>
        <Text style={styles.gameTitle}>{name}</Text>
        <Avatar source={{ uri: homeTeam.team.logo }} rounded />
        <Text style={styles.gameTitle}>{homeTeam.team.displayName}</Text>
        <Text style={styles.gameTitle}>{homeTeam.score}</Text>
        <Text style={styles.gameTitle}>{awayTeam.team.displayName}</Text>
        <Text style={styles.gameTitle}>{awayTeam.score}</Text>
        <View>
          <Text style={styles.gameTitle}>Key Performer</Text>
          <Avatar
            source={{ uri: myTeam.leaders[3].leaders[0].athlete.headshot }}
            rounded
          />
          <Text style={styles.gameTitle}>
            {myTeam.leaders[3].leaders[0].athlete.fullName} -
            {myTeam.leaders[3].leaders[0].displayValue}
          </Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.gameTitle}>Top Stats</Text>
        <View>
          <Avatar
            source={{ uri: myTeam.leaders[0].leaders[0].athlete.headshot }}
            rounded
          />
          <Text style={styles.gameTitle}>
            {myTeam.leaders[0].leaders[0].athlete.fullName} -
            {myTeam.leaders[0].leaders[0].displayValue}
          </Text>
        </View>
        <View>
          <Avatar
            source={{ uri: myTeam.leaders[2].leaders[0].athlete.headshot }}
            rounded
          />
          <Text style={styles.gameTitle}>
            {myTeam.leaders[2].leaders[0].athlete.fullName} -
            {myTeam.leaders[2].leaders[0].displayValue}
          </Text>
        </View>

        <View>
          <Avatar
            source={{ uri: myTeam.leaders[1].leaders[0].athlete.headshot }}
            rounded
          />
          <Text style={styles.gameTitle}>
            {myTeam.leaders[1].leaders[0].athlete.fullName} -
            {myTeam.leaders[1].leaders[0].displayValue}
          </Text>
        </View>

        <Text style={styles.gameTitle}>Top Stats</Text>
        {/* <Avatar source={{ uri: homeTeam.team.logo }} rounded />
      <Text style={styles.gameTitle}>{homeTeam.team.displayName}</Text>
      <Text style={styles.gameTitle}>{homeTeam.score}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gameTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  gameDate: {
    fontSize: 14,
    marginVertical: 8,
  },
  teamContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamInfo: {
    alignItems: "center",
  },
  teamLogo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  teamName: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default GameCard;
