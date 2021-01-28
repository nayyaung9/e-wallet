import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Layout from "../../components/Layout";
import WalletDashboard from "../../components/wallet/WalletDashboard";
import WalletManagerList from "../../components/wallet/WalletManagerList";
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
import { formatNumber } from "../../utils";

const HomeScreen = () => {
  return (
    <Layout>
      <Container
        style={{
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.root}>
          <View
            style={{
              paddingLeft: 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10
            }}
          >
            <Text style={{ color: "#7188a5", fontWeight: "bold" }}>Available Balance</Text>
            <H3>${formatNumber(150000)}</H3>
          </View>
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
                          source={item.image}
                        />
                      </Left>
                      <Right>
                        <Text>လက်ကျန်ပမာဏ</Text>
                        <H3>{formatNumber(item.amount)} Ks</H3>
                      </Right>
                    </CardItem>
                  </Card>
                </View>
              ))}
          </Swiper>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
          <WalletDashboard />
          <WalletManagerList />
        </View>
      </Container>
    </Layout>
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
    source: "Pocket Money",
    amount: "2000",
    image: require("../../assets/image/pocket_money.jpg"),
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
    marginTop: 10,
  },

  slide: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default HomeScreen;
