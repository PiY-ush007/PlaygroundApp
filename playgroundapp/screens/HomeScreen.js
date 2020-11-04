import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import { Header, Icon, ListItem } from "react-native-elements";
import db from "../config";
import firebase from "firebase";
import ChallengePost from "./ChallengePost";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      challengeList: [],
    };
    this.challengeRef = null;
  }

  getChallengeList = () => {
    this.challengeRef = db
      .collection("all_challenges")
      .onSnapshot((snapshot) => {
        var challengeList = snapshot.docs.map((doc) => doc.data());
        this.setState({
          challengeList: challengeList,
        });
      });
  };

  componentDidMount() {
    this.getChallengeList();
  }
  componentWillUnmount() {
    this.challengeRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    <ListItem
      key={i}
      title={item.caption}
      subtitle={item.description}
      bottomDivider
    />;
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{
            text: "Playground",
            style: { color: "white", fontSize: 20, fontWeight: "bold" },
          }}
          rightComponent={
            <Icon
              name="pencil"
              type="font-awesome"
              color="black"
              onPress={() => {
                this.props.navigation.navigate("ChallengePost");
              }}
            />
          }
          leftComponent={
            <Icon
              name="home"
              type="font-awesome"
              color="black"
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            />
          }
        />

        <View style={{ flex: 1 }}>
          {this.state.challengeList.length === 0 ? (
            <View>
              <Text>list of all challenges</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.challengeList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}
