import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Thumbnail,
  Body,
  Button,
} from "native-base";

const WalletManagerList = () => {
  return (
    <>
      <>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://image.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg",
                }}
              />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </>
    </>
  );
};

export default WalletManagerList;
