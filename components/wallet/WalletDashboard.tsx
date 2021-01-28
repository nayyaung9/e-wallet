import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Text } from "native-base";

const WalletDashboard = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.card}>
        <Text>Income</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Text>Expense</Text>
      </TouchableOpacity>
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
    width: "47%",
    borderWidth: 2,
    borderColor: "#ddd",
    borderStyle: "solid",
  },
});

export default WalletDashboard;
