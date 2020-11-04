import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class ChallengePost extends React.Component {

  constructor(){
    super();
    this.state={
       userId : firebase.auth().currentUser.email,
       caption:'',
       description:'',
       points:''
    }
  }

 createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

addChallenge=(caption,description)=>{
var userId = this.state.userId
var challengeId= this.createUniqueId();
 db.collection('all_challenges').add({
   "user_id":userId,
   "caption":caption,
   "description":description,
   "challengeId":challengeId
 })
}

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Playground',
            style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
          }}
          leftComponent={
           <Icon
           name='home' type='font-awesome' color='black' 
           onPress={()=>{
             this.props.navigation.navigate('HomeScreen')
           }}
          
           />
          }
          rightComponent={
           <Icon
           name='pencil' type='font-awesome' color='black' 
           onPress={()=>{
             this.props.navigation.navigate('ChallengePost')
           }}
           />

            }
           />
        <Text style={{ textAlign: 'center', fontSize: 40 }}>challenge</Text>
      
     


        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 30,
            width: 225,
            height: 40,
            fontSize: 17,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop:50,
             borderColor:'gray'
          }}
          placeholder="Caption"

          onChangeText={(text)=>{
            this.setState({
              caption:text
            })
          }}
        />
        

        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 125,
            height: 60,
            fontSize: 15,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop:50,
            borderColor:'gray'
          }}
         keyboardType="numeric"
          placeholder="number of points"
         
           onChangeText={(text)=>{
            this.setState({
              points:text
            })
          }}
          
        />
         <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 15,
            width: 224,
            height: 125,
            fontSize: 13,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop:50,
            borderColor:'gray'
          }}
         
          placeholder="description"
          
           onChangeText={(text)=>{
            this.setState({
              description:text
            })
          }}
        />

        

<TouchableOpacity
onPress={()=>{
  this.addChallenge(this.state.caption,this.state.description);
}}
>
<Text>Post</Text>
</TouchableOpacity>

      </View>
    );
  }
}
