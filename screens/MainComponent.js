import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useEffect } from "react";

// import { createDrawerNavigator } from "@react-navigation/drawer";

import GameScreen from "./GameScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { fetchGame } from "../features/nba/nbaSlice";

// "@react-navigation/drawer": "5.12.9", pulled from package.json

const NbaNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="Nba"
        component={NbaScreen}
        options={({ route }) => ({
          title: route.params.team.teamName,
        })}
      />
      <Stack.Screen
        name="Nfl"
        component={NflScreen}
        options={({ route }) => ({
          title: route.params.team.teamName,
        })}
      />
      <Stack.Screen
        name="Epl"
        component={EplScreen}
        options={({ route }) => ({
          title: route.params.team.teamName,
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchGame());
  // }, [dispatch]);

  return (
    <View style={styles.container}>
      <GameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
});

export default Main;
