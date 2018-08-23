import React, {Component} from 'react';
import {Button,TextInput,StyleSheet, Text, View,Alert} from 'react-native';
import {auth} from '../Firebase/config';
import { addEmployeeToDB,employeeObj } from '../Firebase/DBDetails/employeeDB';


export default class SignUp extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
    EmployeeId:'',
    Name:'',
    EmailId: '',
    password:'',
    errorMessage:null,
    };
   }  

   saveEmployeeDB = () => {
    employeeObj.id = this.state.EmployeeId
    employeeObj.name = this.state.Name
    employeeObj.EmailId = this.state.EmailId
    addEmployeeToDB(employeeObj); 
    this.props.navigation.navigate('Login',{ EmailId });
   }

  handleSignUp = () => {
     setTimeout(() => {
    const { EmailId, password } = this.state
    auth
      .createUserWithEmailAndPassword(EmailId, password)
      .then(user => this.saveEmployeeDB())
      .catch(error => this.setState({ errorMessage: error.message }));
    }, 5000);
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
                onChangeText={(EmployeeId) => this.setState({EmployeeId})}
                  placeholder = 'Employee Id'
                  returnKeyType = {"next"}
                  />
                <TextInput style={styles.textInput}
                onChangeText={(Name) => this.setState({Name})}
                  placeholder = 'Name'
                  returnKeyType = {"next"}               
                    />        
                <TextInput style={styles.textInput}
                onChangeText={(EmailId) => this.setState({EmailId})}
                  placeholder = 'Email Id'
                  returnKeyType = {"next"}
                                  
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
