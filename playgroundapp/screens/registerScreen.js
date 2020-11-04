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

export default class RegisterScreen extends React.Component{
 constructor(){
   super();
   this.state={
     name:'',
     contact:'',
     emailId:'',
     password:'',
     confirmPassword:'',
   }
 }
  userSignUp = (emailId, password,confirmPassword) =>{
   if(password !== confirmPassword){
       return Alert.alert("password doesn't match\Check your password.")
   }else{
     firebase.auth().createUserWithEmailAndPassword(emailId, password)
     .then(()=>{
       db.collection('users').add({
         name:this.state.name,
       
         contact:this.state.contact,
         email_id:this.state.emailId,
         
       })
       return  Alert.alert(
            'User Added Successfully',
            
            '',
            [
              {text: 'OK', onPress: () => this.props.navigation.navigate('AuthScreen')},
            ]
           
        );
     })
     .catch((error)=> {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       return Alert.alert(errorMessage)
     });
   }
  }
 
  render(){
    return(
      <View>
      <Text
      style={{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
        }}
      >Sign up</Text>

      <TextInput
      style={{
        borderWidth:1,
        width:225,
        height:45,
        textAlign:'center',
        borderRadius:40,
        alignSelf:'center',
        marginTop:40
        
        }}
        placeholder="name"
        onChangeText={(text)=>{
        this.setState({
          name:text
        })
        }}
      />


       <TextInput
      style={{
        borderWidth:1,
        width:225,
        height:45,
        textAlign:'center',
        borderRadius:40,
        alignSelf:'center',
        marginTop:40
        
        }}
        keyboardType='email-address'
        placeholder="email-address"
         onChangeText={(text)=>{
        this.setState({
          emailId:text
        })
        }}
      />


       <TextInput
      style={{
        borderWidth:1,
        width:225,
        height:45,
        
        textAlign:'center',
        borderRadius:40,
        alignSelf:'center',
        marginTop:40
        
        }}
        secureTextEntry={true}
        placeholder="password"
         onChangeText={(text)=>{
        this.setState({
          password:text
        })
        }}
      />


       <TextInput
      style={{
        borderWidth:1,
        width:225,
        height:45,
        textAlign:'center',
       
        borderRadius:40,
        alignSelf:'center',
        marginTop:40
        
        }}
        
        placeholder="contact"
         onChangeText={(text)=>{
        this.setState({
          contact:text
        })
        }}
      />



       <TextInput
      style={{
        borderWidth:1,
        width:225,
        height:45,
        borderRadius:40,
        alignSelf:'center',
        textAlign:'center',
        marginTop:40
        
        }}
      secureTextEntry={true}
        placeholder="confirmPassword"
        onChangeText={(text)=>{
        this.setState({
          confirmPassword:text
        })
        }}


      />
      <TouchableOpacity
      style={{

        alignSelf:'center',
        backgroundColor:'orange',
        width:175,
        height:40,
        borderRadius:10,
        marginTop:40
      }}
      onPress={()=>{
        this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
      }}
      >
      <Text
      style={{
        textAlign:'center',
        padding:10,
        color:'white',
        fontSize:20
      }}
      >Register</Text>
      </TouchableOpacity>
      </View>
    )
  }
}