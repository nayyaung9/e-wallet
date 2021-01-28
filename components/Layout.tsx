import React from "react";
import {
  Container,
  Header,
  Body,
  Right,
  Title,
  Subtitle,
  Button,
} from "native-base";
import { ReactNode } from "react";
import { StatusBar, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const Layout = ({ children }: IProps) => {
  return (
    <Container>
      <Header
        androidStatusBarColor="#25509d"
        iosBarStyle="light-content"
        style={{
          backgroundColor: "#25509d",
        }}
      >
        <StatusBar barStyle="light-content" />

        <Body style={{ paddingLeft: 10 }}>
          <Title style={{ color: "white" }}>Hello 👏🏻</Title>
          <Subtitle style={{ color: "white" }}>Nay Yaung Lin Lakk</Subtitle>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              name="notifications-outline"
              style={{ fontSize: 22, color: "white" }}
            />
          </Button>
          <Image
            source={require("../assets/image/me.jpg")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#ddd",

            }}
          />
        </Right>
      </Header>
      {children}
    </Container>
  );
};

export default Layout;
