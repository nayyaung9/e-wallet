import React from "react";
import {
  Container,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  List,
} from "native-base";

const WalletManagerList = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <List
        style={{ borderWidth: 1, borderStyle: "solid", borderColor: "#ddd", borderRadius: 8 }}
      >
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#FF9501" }}>
              <Icon active name="md-card" />
            </Button>
          </Left>
          <Body>
            <Text>Bank Source</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
            <Text>Income</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>Expense</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
    </Container>
  );
};

export default WalletManagerList;
