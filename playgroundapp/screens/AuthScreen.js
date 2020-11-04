import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class AuthScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }
  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        
        this.props.navigation.navigate('HomeScreen')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            marginTop: 75,
          }}>
          Playground
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 75,
            height: 75,
            width: 225,
            alignSelf: 'center',
            borderRadius: 50,
            fontSize: 16,
            textAlign: 'center',
          }}
          placeholder="email-address"
          keyboardType="emaill-address"
          onChangeText={(text) => {
            this.setState({
              emailId: text,
            });
          }}
        />
        <TextInput
          style={{
            borderWidth: 1,
            marginTop: 75,
            height: 75,
            width: 225,
            alignSelf: 'center',
            borderRadius: 50,
            fontSize: 16,
            textAlign: 'center',
          }}
          
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 50,
            backgroundColor: 'white',
            width: 75,
            height: 40,
          }}
          onPress={() => {
            this.userLogin(this.state.emailId, this.state.password);
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              color: 'blue',
              fontSize: 20,
            }}>
            login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          alignSelf:'center',
          marginTop:30
        }}
        onPress={()=>{
          this.props.navigation.navigate('RegisterScreen');
        }}
        >
        <Text
        style={{
          textAlign:'center',
          color:'blue',
          padding:10,
          fontSize:20
        }}
        >sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
