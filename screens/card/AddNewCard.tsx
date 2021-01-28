import React, { useState, useEffect, useRef } from "react";
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
import * as ImagePicker from "expo-image-picker";
import { View, Platform, TouchableOpacity, Image } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const newCardFormSchema = yup.object().shape({
  cardName: yup
    .string()
    .min(2, "Card name must be at least 2 characters")
    .max(25, "Card name must be lower then 25 characters")
    .required("Card Name is Required"),
  amount: yup.number().min(1, "Initial Amount must be at least 1 characters"),
});

const AddNewCardScreen = ({ navigation }: { navigation: any }) => {
  const [image, setImage] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onFormSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
      if (formRef.current.isValid) {
        console.log("DONE");
      }
    }
  };

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
          <Button transparent onPress={onFormSubmit}>
            <Text>Submit</Text>
          </Button>
        </Right>
      </Header>
      <Content style={styles.root}>
        <Formik
          validationSchema={newCardFormSchema}
          innerRef={formRef}
          initialValues={{ cardName: "", amount: "" }}
          onSubmit={(values) => console.log("values", values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <Form>
              <Item floatingLabel>
                <Label>Card Name</Label>
                <Input
                  onChangeText={handleChange("cardName")}
                  onBlur={handleBlur("cardName")}
                  value={values.cardName}
                />
              </Item>
              {errors.cardName && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.cardName}
                </Text>
              )}
              <Item floatingLabel>
                <Label>Initial Amount</Label>
                <Input
                  keyboardType="numeric"
                  onChangeText={handleChange("amount")}
                  onBlur={handleBlur("amount")}
                  value={values.amount}
                />
              </Item>
              {errors.amount && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.amount}
                </Text>
              )}

              {!image ? (
                <TouchableOpacity
                  style={styles.imagePicker}
                  onPress={() => pickImage()}
                >
                  <Text>Select an image for your bank</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.imagePicker}>
                  <Image
                    source={{ uri: image }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                    resizeMode="cover"
                  />
                  <Button
                    transparent
                    onPress={() => setImage(null)}
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      backgroundColor: "#fff",
                      borderRadius: 100,
                    }}
                  >
                    <Icon name="trash" style={{ color: "#000" }} />
                  </Button>
                </View>
              )}
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
  },
  imagePicker: {
    borderWidth: 2,
    borderColor: "#ddd",
    height: 220,
    marginVertical: 15,
    marginHorizontal: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddNewCardScreen;
