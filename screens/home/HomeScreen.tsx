import React from "react";
import { StyleSheet, View, Image, Animated } from "react-native";
import Layout from "../../components/Layout";
import Swiper from "react-native-swiper";
import {
  Container,
  H2,
  H3,
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Button,
  Icon,
} from "native-base";
import { formatNumber } from "../../utils";
import WalletManagerList from "../../components/wallet/WalletManagerList";
import WalletDashboard from "../../components/wallet/WalletDashboard";
import * as Animatable from "react-native-animatable";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout>
      <Container
        style={{
          backgroundColor: "#25509d",
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 15,
            backgroundColor: "#25509d",
          }}
        >
          <Text style={{ color: "#96aad0", fontWeight: "bold" }}>
            Available Balance
          </Text>
          <H3 style={{ color: "#fff" }}>${formatNumber(150000)}</H3>
        </View>

        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          style={styles.root}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <H2 style={{ color: "#103c6a", fontWeight: "bold" }}>My Cards</H2>
              <Text note>2 ATM Cards, 2 Bank Books</Text>
            </View>
            <View>
              <Button iconLeft transparent small>
                <Icon name="md-add-circle-outline" />
                <Text style={{ paddingLeft: 4 }} onPress={() => navigation.navigate("AddNewCard")}>Add Card</Text>
              </Button>
            </View>
          </View>
          <Swiper
            containerStyle={{ marginTop: 20 }}
            loop={false}
            showsPagination={false}
          >
            {items &&
              items.map((item, i) => (
                <View style={styles.slide} key={i}>
                  <Card style={{ borderRadius: 8 }}>
                    <CardItem
                      header
                      bordered
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    >
                      <Text>{item.source}</Text>
                      <Text style={{ fontSize: 14 }}>
                        more detail...
                      </Text>
                    </CardItem>
                    <CardItem
                      style={{
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                      }}
                    >
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
          <View style={{ flex: 2 }}>
            <WalletDashboard />
            <WalletManagerList />
          </View>
        </Animatable.View>
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
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  slide: {
    flex: 1,
    marginBottom: 50,
  },
});

export default HomeScreen;
