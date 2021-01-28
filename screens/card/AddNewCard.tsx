import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";

const AddNewCardScreen = ({ navigation }) => {
  return (
    <Container>
      <Header
        androidStatusBarColor="#25509d"
        iosBarStyle="light-content"
        style={{
          backgroundColor: "#25509d",
        }}
      >
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Add New Card</Title>
        </Body>
        <Right>
          <Button transparent>
            <Text>Submit</Text>
          </Button>
        </Right>
      </Header>
      <Content style={styles.root}>
        <Form>
          <Item floatingLabel>
            <Label>Card Name</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Initial Amount</Label>
            <Input keyboardType="numeric" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
  },
});

export default AddNewCardScreen;
