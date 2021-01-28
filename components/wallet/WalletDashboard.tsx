import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Text } from "native-base";

const WalletDashboard = () => {
  return (
    <View style={styles.root}>
      <Card style={{ borderRadius: 8 }}>
        <CardItem style={{ borderRadius: 8 }}>
          <Text>Yo</Text>
        </CardItem>
      </Card>
      <Card style={{ borderRadius: 8 }}>
        <CardItem style={{ borderRadius: 8 }}>
          <Text>Yo</Text>
        </CardItem>
      </Card>
      <Card style={{ borderRadius: 8 }}>
        <CardItem style={{ borderRadius: 8 }}>
          <Text>Yo</Text>
        </CardItem>
      </Card>
      <Card style={{ borderRadius: 8 }}>
        <CardItem style={{ borderRadius: 8 }}>
          <Text>Yo</Text>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    padding: 10,
  },
});

export default WalletDashboard;
