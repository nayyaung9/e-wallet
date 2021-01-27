import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Constants from "expo-constants";
import Swiper from "react-native-swiper";
import {
  Container,
  H3,
  Card,
  CardItem,
  Text,
  Right,
  Left,
} from "native-base";

const HomeScreen = () => {
  return (
    <Container
      style={{
        paddingHorizontal: 10,
      }}
    >
      <View style={styles.root}>
        <Swiper
          paginationStyle={{
            bottom: 0,
          }}
          loop={false}
        >
          {items &&
            items.map((item, i) => (
              <View style={styles.slide} key={i}>
                <Card>
                  <CardItem header bordered>
                    <Text>{item.source}</Text>
                  </CardItem>
                  <CardItem>
                    <Left>
                  
                      <Image
                        style={{ width: 70, height: 70 }}
                        source={(item.image)}
                      />
                    </Left>
                    <Right>
                      <Text>လက်ကျန်ပမာဏ</Text>
                      <H3>{item.amount} Ks</H3>
                    </Right>
                  </CardItem>
                </Card>
              </View>
            ))}
        </Swiper>
      </View>
      <View style={{ flex: 3 }}>
        <Text>A nother Text</Text>
      </View>
    </Container>
  );
};

const items = [
  {
    id: 1,
    source: "KBZPay",
    amount: "77",
    image: require("../../assets/image/kbz_pay.png"),
  },
  {
    id: 2,
    source: "Pocket",
    amount: "2000",
    image: require("../../assets/image/kbz_pay.png"),
  },
  {
    id: 3,
    source: "AYA Bank",
    amount: "3000",
    image: require("../../assets/image/aya-bank.png"),
  },
  {
    id: 4,
    source: "CB Bank",
    amount: "80000",
    image: require("../../assets/image/cbbank.jpg"),
  },
];
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  slide: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default HomeScreen;
