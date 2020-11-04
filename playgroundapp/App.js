import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import AuthScreen from './screens/AuthScreen';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/HomeScreen';
import ChallengePost from './screens/ChallengePost';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
 render(){
   return(
     <View>
    <AppContainer/>
   
     </View>
   )
 }
}
var appNavigator=createSwitchNavigator({
 AuthScreen:AuthScreen,
 RegisterScreen:RegisterScreen,
 HomeScreen:HomeScreen,
 ChallengePost:ChallengePost
})


const AppContainer=createAppContainer(appNavigator);
