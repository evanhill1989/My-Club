import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { NBA } from "../app/shared/NBA";

const NflScreen = () => {
  return (
    <View>
      <Text>NFL Screen</Text>
    </View>
  );
};

// const renderDirectoryItem = ({ item: campsite }) => {
//     return (
//       <ListItem
//         onPress={() => navigation.navigate("CampsiteInfo", { campsite })}
//       >
//         <Avatar source={campsite.image} rounded />
//         <ListItem.Content>
//           <ListItem.Title>{campsite.name}</ListItem.Title>
//           <ListItem.Subtitle>{campsite.description}</ListItem.Subtitle>
//         </ListItem.Content>
//       </ListItem>
//     );
//   };

export default NflScreen;
