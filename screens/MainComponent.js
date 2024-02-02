import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useEffect } from "react";

// import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { fetchGame } from "../features/nba/nbaSlice";
import HomeScreen from "./HomeScreen";
import NbaScreen from "./NbaScreen";
import NflScreen from "./NflScreen";
import EplScreen from "./EplScreen";
import TeamScreen from "./TeamScreen";

// "@react-navigation/drawer": "5.12.9", pulled from package.json

const SiteNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.navigatorContainer}>
      <Stack.Navigator style={styles.container} initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#512DA8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Nba"
          component={NbaScreen}
          options={{ title: "NBA" }}
        />
        <Stack.Screen
          name="Nfl"
          component={NflScreen}
          options={{ title: "NFL" }}
        />
        <Stack.Screen
          name="Epl"
          component={EplScreen}
          options={{ title: "EPL" }}
        />
        <Stack.Screen
          name="Team"
          component={TeamScreen}
          options={{ title: "Team" }}

          // {({ route }) => ({
          //   title: route.params.campsite.name,
          // })}
        />
      </Stack.Navigator>
    </View>
  );
};

const Main = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchGame());
  // }, [dispatch]);

  return (
    <View style={styles.container}>
      <SiteNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  navigatorContainer: {
    flex: 1,
    justifyContent: "center", // Center vertically

    width: "100%",
  },
});

export default Main;
