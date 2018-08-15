import React, {Component} from 'react';
import {Button,TextInput,StyleSheet, Text, View,Alert} from 'react-native';
import Login from './login';
import { createStackNavigator } from 'react-navigation';
import {auth} from '../Firebase/config';


export default class SignUp extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
    FirstName:'',
    LastName:'',
    EmailId: '',
    password:'',
    errorMessage:null,
    };
   }  

  handleSignUp = () => {
    const { EmailId, password } = this.state
    auth
      .createUserWithEmailAndPassword(EmailId, password)
      .then(user => this.props.navigation.navigate('MainScreen'))
      .catch(error => this.setState({ errorMessage: error.message }))
    }

  render() {
    return (
      <View style={styles.container}>
                <Text 
                    style={{fontSize: 27}}>
                    Finance Manager
                </Text>
                {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
              </Text>}
                <TextInput style={styles.textInput}
                onChangeText={(FirstName) => this.setState({FirstName})}
                  placeholder = 'First Name'
                  returnKeyType = {"next"}
                  onSubmitEditing={() => { this.password.focus(); }}
                  />
                <TextInput style={styles.textInput}
                onChangeText={(LastName) => this.setState({LastName})}
                  placeholder = 'Last Name'
                  returnKeyType = {"next"}
                  onSubmitEditing={() => { this.password.focus(); }}
                 
                    />        
                <TextInput style={styles.textInput}
                onChangeText={(EmailId) => this.setState({EmailId})}
                  placeholder = 'Email Id'
                  returnKeyType = {"next"}
                  onSubmitEditing={() => { this.password.focus(); }}
                  
                    />   
                <TextInput style={styles.textInput}
                onChangeText={(password) => this.setState({password})}
                  placeholder = 'Password'
                  secureTextEntry={true}
                  ref={(input) => { this.password = input; }}
                   />
                <View style={{margin:7}} />
                <Button 
                        onPress={()=>{this.handleSignUp()}}
                        title="SignUp"
                    />
                <View style={{margin:7}} />    
                 <Text 
                    style={{fontSize: 20,justifyContent:'center'}}
                    onPress={()=>{this.props.navigation.navigate('LoginScreen')}}>
                    Already have an account? Login
                 </Text>         
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding:50,
  },
  textInput:{
  	borderColor:'black',
    backgroundColor:'#D3D3D3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    margin:10,
  },
 
});
